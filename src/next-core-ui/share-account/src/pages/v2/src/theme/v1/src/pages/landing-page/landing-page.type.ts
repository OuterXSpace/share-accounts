import { IThemeResult, IUiConfigServerSide } from '../../../../../../../../../../../models';

export interface ShareAccountPageV1ThemeV2Props {
  systemConfig?: IUiConfigServerSide;
  slugConfigJSON?: IThemeResult;
  slugKey?: string;
}
