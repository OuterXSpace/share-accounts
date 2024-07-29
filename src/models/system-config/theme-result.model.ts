import { IDynamicSlugConfig } from './dynamic-slug-config.model';
import { ISection } from './section-data-config.model';

export interface IThemeResult extends IDynamicSlugConfig {
  array?: ISection[];
  theme?: string;
  className?: string;
}
