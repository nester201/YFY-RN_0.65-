import { ForkEffect } from '@redux-saga/core/effects';
import { takeEvery } from 'redux-saga/effects';

type TFunction = (...args: any[]) => any;

type TSaga<T extends { [key: string]: TFunction }> = {
  [N in keyof T]?: (action: ReturnType<T[N]>) => Generator<any, any, any>;
};

export function createTakeEverySagas<T extends { [key: string]: TFunction }>(sagasDescription: TSaga<T>) {
  const actionTypes = Object.keys(sagasDescription);

  return actionTypes.reduce((acc: ForkEffect<never>[], current) => {
    const worker = takeEvery<string, any>(current, sagasDescription[current]);
    acc.push(worker);
    return acc;
  }, []);
}
