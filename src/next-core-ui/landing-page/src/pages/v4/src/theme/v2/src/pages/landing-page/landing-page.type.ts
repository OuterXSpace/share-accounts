import { IThemeResult, IUiConfigServerSide } from '../../../../../../../../../../../models';

export interface LandingPageV4ThemeV2Props {
  systemConfig?: IUiConfigServerSide;
  slugConfigJSON?: IThemeResult;
  slugKey?: string;
}
