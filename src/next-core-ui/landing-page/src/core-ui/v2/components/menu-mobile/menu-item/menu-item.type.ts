export interface ILandingPageMenuItemMobileV1Props {
  item?: ILandingPageMenuItemMobileV1Model;
  closeToggle?: () => void;
}

export interface ILandingPageMenuItemMobileV1Model {
  label?: string;
  link?: string;
  id?: string;
}
