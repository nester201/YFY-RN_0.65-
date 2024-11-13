import React from 'react';
import { StyleSheet, View } from 'react-native';

import Dot from './Dot';

const styles = StyleSheet.create({
  container: {
    marginLeft: 6,
    marginTop: 7.2,
  },
});

type Props = {
  dotColor: string;
  dotMargin: number;
  dotAmplitude: number;
  dotSpeed: number;
  show: boolean;
  dotRadius: number;
  dotY: number;
  dotX: number;
};

type State = {
  currentAnimationTime: number;
  y1?: number;
  y2?: number;
  y3?: number;
};

class TypingAnimation extends React.Component<Props, State> {
  _animation: () => void;
  frameAnimationRequest: number;

  static defaultProps = {
    dotColor: 'black',
    dotMargin: 3,
    dotAmplitude: 3,
    dotSpeed: 0.15,
    show: true,
    dotRadius: 2.5,
    dotY: 6,
    dotX: 12,
  };

  constructor(props: Props) {
    super(props);

    const { dotAmplitude, dotSpeed, dotY } = props;

    this.state = {
      currentAnimationTime: 0,
    };

    this._animation = () => {
      this.setState(prevState => ({
        y1: dotY + dotAmplitude * Math.sin(prevState.currentAnimationTime),
        y2: dotY + dotAmplitude * Math.sin(prevState.currentAnimationTime - 1),
        y3: dotY + dotAmplitude * Math.sin(prevState.currentAnimationTime - 2),
        currentAnimationTime: prevState.currentAnimationTime + dotSpeed,
      }));
      this.frameAnimationRequest = requestAnimationFrame(this._animation);
    };
    this.frameAnimationRequest = requestAnimationFrame(this._animation);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frameAnimationRequest);
  }

  render() {
    const { show, dotColor, dotMargin, dotRadius, dotX } = this.props;

    if (!show) return null;

    return (
      <View style={styles.container}>
        <Dot x={dotX - dotRadius - dotMargin} y={this.state.y1} radius={dotRadius} dotColor={dotColor} />
        <Dot x={dotX} y={this.state.y2} radius={dotRadius} dotColor={dotColor} />
        <Dot x={dotX + dotRadius + dotMargin} y={this.state.y3} radius={dotRadius} dotColor={dotColor} />
      </View>
    );
  }
}

export default TypingAnimation;
