import { IUiConfigServerSide } from '../../models';

export interface IDynamicRenderPageProps {
  systemConfig?: IUiConfigServerSide;
}

export interface ISystemConfig {
  [key: string]: ISystemConfig | IThemeResult;
}

export interface IThemeResult {
  theme: string;
  className: string;
  array: Record<string, any>[];
  [key: string]: any;
}