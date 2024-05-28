import { IUiConfigServerSide } from '../../models';

export interface DynamicFooterProps {
  item: Record<string, any>;
  slug?: string;
  systemConfig: IUiConfigServerSide;
}
