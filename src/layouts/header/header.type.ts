import { IUiConfigServerSide } from '../../models';

export interface DynamicHeaderProps {
  item: Record<string, any>;
  systemConfig: IUiConfigServerSide;
  slug?: string;
}
