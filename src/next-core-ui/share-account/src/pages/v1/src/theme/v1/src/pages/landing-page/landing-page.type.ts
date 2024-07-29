import { IThemeResult, IUiConfigServerSide } from '../../../../../../../../../../../models';

export interface ShareAccountPageV1ThemeV1Props {
  systemConfig?: IUiConfigServerSide;
  slugConfigJSON?: IThemeResult;
  slugKey?: string;
}
