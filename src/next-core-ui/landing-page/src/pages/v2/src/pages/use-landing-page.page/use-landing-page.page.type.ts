import { IThemeResult, IUiConfigServerSide } from '../../../../../../../../models';

export interface IUseLandingPageV2Props {
  systemConfig?: IUiConfigServerSide;
  slugConfigJSON?: IThemeResult;
  slugKey?: string;
  version?: 'V1' | 'V2' | 'V3';
}
