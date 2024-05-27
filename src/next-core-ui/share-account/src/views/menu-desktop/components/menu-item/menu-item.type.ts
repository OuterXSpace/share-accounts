import { IPopupLinkProps } from '../../../../../../../components';

export interface IMenuItemProps {
  className?: string;
  maxItemPerColumn?: number;

  item?: IMenuItemModel;
  submenu?: ISubMenuModel;
  footerText?: string;
}

export interface IMenuItemModel extends IPopupLinkProps {
  label?: string;
  link?: string;
  icon?: string;
  activeIcon?: string;
}

export interface ISubMenuModel {
  layout?: 'default' | 'grid';
  gridColumns?: number;
  submenuItems: ISubMenuItemModel[];
}

export interface ISubMenuItemModel extends IPopupLinkProps {
  thumbnailBorderRadius?: string;
  thumbnailUrl?: string;
  label?: string;
  link?: string;

  subSections?: ISubMenuSectionModel[];
}

export interface ISubMenuSectionModel {
  id: string;
  label?: string;
  weekDay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  menuItems?: IMenuItemModel[];
}
