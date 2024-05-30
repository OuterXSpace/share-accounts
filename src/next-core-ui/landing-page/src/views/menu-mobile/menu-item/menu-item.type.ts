export interface IMenuItemMobile02Props {
  item?: IMenuItemMobile02Model;
  closeToggle?: () => void;
}

export interface IMenuItemMobile02Model {
  label?: string;
  link?: string;
  id?: string;
  authenRequired?: boolean;
  hiddenWhenLogin?: 'YES' | 'NO';
}
