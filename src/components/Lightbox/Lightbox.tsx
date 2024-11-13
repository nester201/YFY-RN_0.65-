import { LightboxProps } from '@interfaces/lightbox';
import React from 'react';
import { Animated, MeasureOnSuccessCallback, TouchableHighlight, View } from 'react-native';

import LightboxOverlay from './LightboxOverlay';

export default class Lightbox extends React.Component<LightboxProps> {
  _root: any = null;

  constructor(props: LightboxProps) {
    super(props);
  }

  static defaultProps = {
    swipeToDismiss: true,
    useNativeDriver: false,
  };

  state = {
    isOpen: false,
    origin: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },
    layoutOpacity: new Animated.Value(1),
  };

  getContent = () => {
    if (this.props.renderContent) {
      return this.props.renderContent();
    } else if (this.props.activeProps && this.props.children) {
      return React.cloneElement(React.Children.only(this.props.children), this.props.activeProps);
    }
    return this.props.children;
  };

  getOverlayProps = () => ({
    isOpen: this.state.isOpen,
    origin: this.state.origin,
    renderHeader: this.props.renderHeader,
    swipeToDismiss: !!this.props.swipeToDismiss,
    springConfig: this.props.springConfig,
    backgroundColor: this.props.backgroundColor,
    children: this.getContent(),
    didOpen: this.props.didOpen,
    willClose: this.props.willClose,
    onClose: this.onClose,
    useNativeDriver: !!this.props.useNativeDriver,
  });

  measureCallback: MeasureOnSuccessCallback = (_x, _y, width, height, pageX, pageY) => {
    this.props.onOpen && this.props.onOpen();

    this.setState(
      {
        isOpen: !!this.props.navigator,
        isAnimating: true,
        origin: {
          width,
          height,
          x: pageX,
          y: pageY,
        },
      },
      () => {
        this.props.didOpen && this.props.didOpen();
        if (this.props.navigator) {
          const route = {
            component: LightboxOverlay,
            passProps: this.getOverlayProps(),
          };
          const routes = this.props.navigator.getCurrentRoutes();
          routes.push(route);
          this.props.navigator.immediatelyResetRouteStack(routes);
        } else {
          this.setState({
            isOpen: true,
          });
        }
        setTimeout(() => {
          this._root && this.state.layoutOpacity.setValue(0);
        });
      }
    );
  };

  open = () => {
    this._root.measure(this.measureCallback);
  };

  onClose = () => {
    this.state.layoutOpacity.setValue(1);
    this.setState(
      {
        isOpen: false,
      },
      this.props.onClose
    );
    if (this.props.navigator) {
      const routes = this.props.navigator.getCurrentRoutes();
      routes.pop();
      this.props.navigator.immediatelyResetRouteStack(routes);
    }
  };

  render() {
    // measure will not return anything useful if we dont attach a onLayout handler on android
    return (
      <View ref={component => (this._root = component)} style={this.props.style} onLayout={() => undefined}>
        <Animated.View style={{ opacity: this.state.layoutOpacity }}>
          <TouchableHighlight
            underlayColor={this.props.underlayColor}
            onPress={this.open}
            onLongPress={this.props.onLongPress}
          >
            {this.props.children}
          </TouchableHighlight>
        </Animated.View>
        {this.props.navigator ? false : <LightboxOverlay {...this.getOverlayProps()} />}
      </View>
    );
  }
}
