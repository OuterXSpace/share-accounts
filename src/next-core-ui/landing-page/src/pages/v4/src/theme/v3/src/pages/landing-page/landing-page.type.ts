import { IThemeResult } from '../../../../../../../../../../../hooks';
import { IUiConfigServerSide } from '../../../../../../../../../../../models';

export interface LandingPageV4ThemeV3Props {
  systemConfig?: IUiConfigServerSide;
  slugConfigJSON?: IThemeResult;
  slugKey?: string;
}
