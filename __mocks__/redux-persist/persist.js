jest.mock('redux-persist/integration/react', () => ({
  PersistGate: props => props.children,
}));

jest.mock('redux-persist', () => ({
  ...jest.requireActual('redux-persist'),
  persistReducer: jest.fn().mockImplementation((config, reducer) => reducer),
}));
