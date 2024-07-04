import { IDataConfig } from './data-config.model';
import { SeoData } from './seo-data-config.model';
import { ISystemConfig } from './system-config.model';

type TDynamicValue = number | string | boolean | Record<string, any>[] | Record<string, any>;

export interface IRootDynamicConfig<T = TDynamicValue> {
  [key: string]: T;
}

export interface IRootSystemConfig extends IRootDynamicConfig {
  systemConfig?: ISystemConfig;
  dataConfig?: IDataConfig;
  seoData?: SeoData;
  theme?: string;
}
