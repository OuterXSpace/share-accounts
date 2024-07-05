import { IDataConfig } from './data-config.model';
import { SeoData } from './seo-data-config.model';
import { ISystemConfig } from './system-config.model';

export interface IRootDynamicConfig<T = any> {
  [key: string]: T;
}

export interface IRootSystemConfig extends IRootDynamicConfig {
  systemConfig?: ISystemConfig;
  dataConfig?: IDataConfig;
  seoData?: SeoData;
  theme?: string;
}
