import { IThemeResult, IUiConfigServerSide } from '../../../../../../../../../../../models';

export interface LandingPageV4ThemeV3Props {
  systemConfig?: IUiConfigServerSide;
  slugConfigJSON?: IThemeResult;
  slugKey?: string;
}
