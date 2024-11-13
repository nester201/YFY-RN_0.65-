type TFunction = (...args: any[]) => any;

type TReducer<State, T extends { [key: string]: TFunction }> = {
  [N in keyof T]?: (state: State, action: ReturnType<T[N]>) => State;
};

export function createReducers<State, T extends { [key: string]: TFunction }>(
  initialState: State,
  handlers: TReducer<State, T>
): (state: State, action: any) => State {
  return function reducer(state = initialState, action) {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      // @ts-ignore
      return handlers[action.type](state, action);
    }

    return state;
  };
}
