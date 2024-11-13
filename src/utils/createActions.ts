function createActionTypeByFieldName(methodName: string): string {
  return methodName.replace(/([A-Z])/g, '_$1').toUpperCase();
}

type TFunction = (...args: any[]) => any;

export type TAction<P extends TFunction> = {
  type: string;
  payload: ReturnType<P>;
};

export type TActionCreator<T extends { [key: string]: TFunction }> = {
  [N in keyof T]: ((...args: Parameters<T[N]>) => TAction<T[N]>) & {
    type: N;
  };
};

export function createActions<T extends { [key: string]: TFunction }>(actionsConfig: T): TActionCreator<T> {
  const result: any = {};
  const actionsTypes = Object.keys(actionsConfig);

  actionsTypes.forEach(actionType => {
    const camelCaseActionType = createActionTypeByFieldName(actionType);
    if (!Object.prototype.hasOwnProperty.call(actionsConfig, actionType)) {
      return;
    }

    const originFun = actionsConfig[actionType];

    result[actionType] = (...args: any[]) => {
      return {
        type: camelCaseActionType,
        payload: originFun(...args),
      };
    };

    result[actionType].type = camelCaseActionType;
    result[actionType].toPrimitive = () => camelCaseActionType;
  });

  return result;
}
