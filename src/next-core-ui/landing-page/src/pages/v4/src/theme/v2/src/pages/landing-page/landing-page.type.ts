import { IThemeResult } from '../../../../../../../../../../../hooks';
import { IUiConfigServerSide } from '../../../../../../../../../../../models';

export interface LandingPageV4ThemeV2Props {
  systemConfig?: IUiConfigServerSide;
  slugConfigJSON?: IThemeResult;
  slugKey?: string;
}
