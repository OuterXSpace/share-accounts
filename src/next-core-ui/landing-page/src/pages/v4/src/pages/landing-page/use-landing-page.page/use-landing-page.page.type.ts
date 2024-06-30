import { IThemeResult } from '../../../../../../../../../hooks';
import { IUiConfigServerSide } from '../../../../../../../../../models';

export interface IUseLandingPageV4Props {
  systemConfig?: IUiConfigServerSide;
  slugConfigJSON?: IThemeResult;
  slugKey?: string;
  version?: 'V1' | 'V2' | 'V3';
}
