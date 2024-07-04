import { DataDynamicObject } from './data-dynamic-object-config.model';

export interface IDataThemeConfig {
  [section: string]: {
    [version: string]: {
      object?: DataDynamicObject;
    };
  };
}
