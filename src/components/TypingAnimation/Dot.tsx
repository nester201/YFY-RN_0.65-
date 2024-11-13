import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import withMemo from '@hocs/withMemo';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});

type Props = {
  x?: number;
  y?: number;
  radius: number;
  dotColor: string;
};

const Dot = withMemo<Props>(({ x, y, radius, dotColor }) => {
  const combineStyles = useMemo(
    () => [
      styles.container,
      {
        left: x,
        top: y,
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius,
        backgroundColor: dotColor,
      },
    ],
    [x, y, radius, dotColor]
  );

  return <View style={combineStyles} />;
});

export default Dot;
