import { HTMLAttributeAnchorTarget } from 'react';

export interface ITotoLink {
  title?: string;
  link?: string;
  authenRequired?: boolean;
  popupWidth?: number;
  popupHeight?: number;
  disablePopup?: boolean;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
  restrictTrial?: boolean;
  disabled?: boolean;
  routeLink?: string;
}
