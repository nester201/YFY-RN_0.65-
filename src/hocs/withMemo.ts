import { FC, memo, MemoExoticComponent } from 'react';

const withMemo = <T>(Component: FC<T>): MemoExoticComponent<FC<T>> => {
  return memo(Component);
};

export default withMemo;
