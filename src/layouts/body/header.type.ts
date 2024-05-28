import { IUiConfigServerSide } from '../../models';

export interface DynamicBodyProps {
  slug?: string;
  item: Record<string, any>;
  systemConfig: IUiConfigServerSide;
}
