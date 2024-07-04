import { ISection } from './section-data-config.model';

export interface IDynamicSlugConfig {
  [key: string]: ISection[] | string | IDynamicSlugConfig;
}
