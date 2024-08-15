import { IThemeResult, IUiConfigServerSide } from '../../../../../../../../../../../../models';

export interface IUseLandingPageV1ThemeV1Props {
  systemConfig?: IUiConfigServerSide;
  slugConfigJSON?: IThemeResult;
  slugKey?: string;
  version?: 'V1' | 'V2' | 'V3';
}
