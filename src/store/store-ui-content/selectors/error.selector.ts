import { IObservableValue } from 'mobx';
import { getStore } from '../store';

export const errorSelector = (
  contentId: string | undefined,
): IObservableValue<string | number | undefined> | undefined => {
  if (!contentId) return undefined;
  return getStore().errors?.get(contentId);
};
