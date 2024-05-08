import { IObservableValue } from 'mobx';

export interface ILoadingStore {
  loading: IObservableValue<boolean>;
  localLoading: Record<string, boolean>;
}
