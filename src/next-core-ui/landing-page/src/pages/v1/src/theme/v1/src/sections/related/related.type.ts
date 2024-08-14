import { IUiConfigServerSide } from '../../../../../../../../../../../models';

export interface IRelatedSectionProps {
  data?: Record<string, any>;
  systemConfig?: IUiConfigServerSide;
  className?: string;
  style?: string;
  type?: string;
  slugKey?: string;
}
