import React, { memo } from 'react';
import { Animated, StyleSheet } from 'react-native';

import { useUpdateLayoutEffect } from '@hooks/useUpdateLayoutEffect';
import TypingAnimation from '@components/TypingAnimation/TypingAnimation';

interface Props {
  isTyping?: boolean;
}

const TypingIndicator: React.FC<Props> = ({ isTyping }) => {
  const { yCoords, heightScale, marginScale } = React.useMemo(
    () => ({
      yCoords: new Animated.Value(200),
      heightScale: new Animated.Value(0),
      marginScale: new Animated.Value(0),
    }),
    []
  );

  useUpdateLayoutEffect(() => {
    if (isTyping) {
      slideIn();
    } else {
      slideOut();
    }
  }, [isTyping]);

  const slideIn = () => {
    Animated.parallel([
      Animated.spring(yCoords, {
        toValue: 0,
        useNativeDriver: false,
      }),
      Animated.timing(heightScale, {
        toValue: 35,
        duration: 250,
        useNativeDriver: false,
      }),
      Animated.timing(marginScale, {
        toValue: 8,
        duration: 250,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const slideOut = () => {
    Animated.parallel([
      Animated.spring(yCoords, {
        toValue: 200,
        useNativeDriver: false,
      }),
      Animated.timing(heightScale, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }),
      Animated.timing(marginScale, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: yCoords,
            },
          ],
          height: heightScale,
          marginBottom: marginScale,
        },
      ]}
    >
      {isTyping ? <TypingAnimation dotRadius={4} dotMargin={5.5} dotColor={'rgba(0, 0, 0, 0.38)'} /> : null}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    width: 45,
    borderRadius: 15,
    backgroundColor: '#855573',
  },
});

export default memo(TypingIndicator);
