import { errorSelectors } from '../../store/error/errorSelectors';
import React, { useMemo } from 'react';
import { StyleSheet, Text } from 'react-native';

import withMemo from '@hocs/withMemo';
import { wp } from '@utils/demension';
import { colors } from '@theme';
import { useSelector } from 'react-redux';

export const TitleOrError = withMemo<{}>(({ children }) => {
  const errorMessage = useSelector(errorSelectors.getErrorMessage);

  const fullErrorMessageStyle = useMemo(() => [styles.mainMessage, styles.errorMessage], []);
  return errorMessage ? (
    <Text style={fullErrorMessageStyle}>{errorMessage}</Text>
  ) : (
    <Text style={styles.mainMessage}>{children}</Text>
  );
});

const styles = StyleSheet.create({
  mainMessage: {
    flex: 2,
    alignSelf: 'center',
    fontSize: 18,
    lineHeight: 30,
    textAlign: 'center',
    maxWidth: wp(200),
    color: colors.mainText,
  },
  errorMessage: {
    color: colors.warning,
  },
});
