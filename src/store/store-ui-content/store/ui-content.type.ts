import { ObservableMap, IObservableValue } from 'mobx';

export interface IUIContentStore {
  contents: ObservableMap<string, any | undefined>;
  versions: Record<string, number>;
  errors: ObservableMap<string, IObservableValue<string | number | undefined>>;
}
