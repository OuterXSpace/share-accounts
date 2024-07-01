import { IThemeResult } from '../../../../../../../../../../../../hooks';
import { IUiConfigServerSide } from '../../../../../../../../../../../../models';

export interface IUseShareAccountPageV1ThemeV1Props {
  systemConfig?: IUiConfigServerSide;
  slugConfigJSON?: IThemeResult;
  slugKey?: string;
}
