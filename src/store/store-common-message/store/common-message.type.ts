import { ObservableMap, IObservableValue } from 'mobx';
import { ITranslatorParams } from '../../../configuration/language';

export type TToastType = 'info' | 'success' | 'warning' | 'error' | 'plain';

export type TToastMessage = number | string | ITranslatorParams | undefined;

export interface ISuccessMessage {
  message?: TToastMessage;
  title?: string | ITranslatorParams; // * NOT USE YET
}

export interface ICommonMessageStore {
  error: IObservableValue<TToastMessage>;
  success: ISuccessMessage | undefined;
  toast:
    | {
        type: TToastType;
        message?: string;
        title?: string;
      }
    | undefined;

  localErrors: ObservableMap<string, IObservableValue<TToastMessage>> | undefined;
  localSuccesses: ObservableMap<string, ISuccessMessage | undefined> | undefined;
}
