import { IThemeResult, IUiConfigServerSide } from '../../../../../../../../../../../models';

export interface LandingPageV4ThemeV1Props {
  systemConfig?: IUiConfigServerSide;
  slugConfigJSON?: IThemeResult;
  slugKey?: string;
}
