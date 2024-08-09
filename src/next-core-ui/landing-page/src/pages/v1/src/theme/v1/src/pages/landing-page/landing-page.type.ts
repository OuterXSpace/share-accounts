import { IThemeResult, IUiConfigServerSide } from '../../../../../../../../../../../models';

export interface LandingPageV1ThemeV1Props {
  systemConfig?: IUiConfigServerSide;
  slugConfigJSON?: IThemeResult;
  slugKey?: string;
}
