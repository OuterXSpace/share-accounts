import { IDataThemeConfig } from './data-theme-config.model';

export interface IDataConfig {
  [theme: string]: IDataThemeConfig;
}
