import React, { RefObject } from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ListRenderItemInfo,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';

import Message, { MessageProps } from './Message';
import TypingIndicator from './TypingIndicator';
import { IChatMessage } from '@interfaces/room';
import { IUser } from '@models/User';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  listStyle: {
    flex: 1,
  },
  scrollToBottomStyle: {
    opacity: 0.8,
    position: 'absolute',
    right: 10,
    bottom: 30,
    zIndex: 999,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 1,
  },
});

export interface MessageContainerProps {
  messages?: IChatMessage[];
  user?: IUser;
  isTyping?: boolean;
  scrollToBottom?: boolean;
  scrollToBottomStyle?: StyleProp<ViewStyle>;
  extraData?: any;
  scrollToBottomOffset?: number;
  forwardRef?: RefObject<FlatList<IChatMessage>>;
  renderChatEmpty?(): React.ReactNode;
  scrollToBottomComponent?(): React.ReactNode;
}

interface State {
  showScrollBottom: boolean;
  hasScrolled?: boolean;
}

export default class MessageContainer extends React.PureComponent<MessageContainerProps, State> {
  static defaultProps = {
    messages: [],
    user: {},
    isTyping: false,
    renderChatEmpty: null,
    renderMessage: null,
    extraData: null,
    scrollToBottom: false,
    scrollToBottomOffset: 200,
    scrollToBottomStyle: {},
  };

  state = {
    showScrollBottom: false,
    hasScrolled: false,
  };

  renderFooter = () => {
    return <TypingIndicator isTyping={this.props.isTyping} />;
  };

  scrollTo(options: { animated?: boolean; offset: number }) {
    if (this.props.forwardRef && this.props.forwardRef.current && options) {
      this.props.forwardRef.current.scrollToOffset(options);
    }
  }

  scrollToBottom = (animated = true) => {
    this.scrollTo({ offset: 0, animated });
  };

  handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {
      nativeEvent: {
        contentOffset: { y: contentOffsetY },
      },
    } = event;
    const { scrollToBottomOffset } = this.props;
    if (contentOffsetY > scrollToBottomOffset!) {
      this.setState({ showScrollBottom: true, hasScrolled: true });
    } else {
      this.setState({ showScrollBottom: false, hasScrolled: true });
    }
  };

  renderRow = ({ item, index }: ListRenderItemInfo<IChatMessage>) => {
    const { messages, user, ...restProps } = this.props;
    if (messages && user) {
      const previousMessage = messages[index + 1] || {};
      const nextMessage = messages[index - 1] || {};

      const messageProps: MessageProps = {
        ...restProps,
        user,
        key: item.id,
        currentMessage: item,
        previousMessage,
        nextMessage,
        position: item.user.id === user.id ? 'right' : 'left',
      };

      return <Message {...messageProps} />;
    }
    return null;
  };

  renderChatEmpty = () => {
    return (
      <View style={styles.container}>
        <Text>Empty chat</Text>
      </View>
    );
  };

  renderScrollToBottomWrapper() {
    return (
      <View style={styles.scrollToBottomStyle}>
        <TouchableOpacity onPress={() => this.scrollToBottom()} hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}>
          <Text>V</Text>
        </TouchableOpacity>
      </View>
    );
  }

  keyExtractor = (item: IChatMessage) => `${item.id}`;

  render() {
    return (
      <View style={styles.container}>
        {this.state.showScrollBottom && this.props.scrollToBottom ? this.renderScrollToBottomWrapper() : null}
        <FlatList
          ref={this.props.forwardRef}
          extraData={[this.props.extraData, this.props.isTyping]}
          keyExtractor={this.keyExtractor}
          automaticallyAdjustContentInsets={false}
          data={this.props.messages}
          style={styles.listStyle}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={this.renderRow}
          inverted={true}
          ListEmptyComponent={this.renderChatEmpty}
          ListHeaderComponent={this.renderFooter}
          onScroll={this.handleOnScroll}
          scrollEventThrottle={100}
          onEndReachedThreshold={0.1}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}
