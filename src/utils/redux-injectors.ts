import { useInjectReducer as useReducer, useInjectSaga as useSaga } from 'redux-injectors';
import { RootStateKeyType, InjectReducerParams, InjectSagaParams } from './injector-typings';

export function useInjectReducer<Key extends RootStateKeyType>(params: InjectReducerParams<Key>) {
  return useReducer(params);
}

export function useInjectSaga(params: InjectSagaParams) {
  return useSaga(params);
}
