export interface IMenuItemMobile01Props {
  item?: IMenuItemMobile01Model;
  closeToggle?: () => void;
}

export interface IMenuItemMobile01Model {
  label?: string;
  link?: string;
  id?: string;
  authenRequired?: boolean;
  hiddenWhenLogin?: 'YES' | 'NO';
}
