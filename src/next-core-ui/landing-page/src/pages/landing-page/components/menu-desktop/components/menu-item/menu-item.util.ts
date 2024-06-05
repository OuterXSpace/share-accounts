import { ILandingPageMenuDesktopItemModel } from './menu-item.type';

export const splitSubmenuSectionItems = (
  menuItems: ILandingPageMenuDesktopItemModel[],
  maxItemPerColumn: number,
): ILandingPageMenuDesktopItemModel[][] => {
  const splitItemArray: ILandingPageMenuDesktopItemModel[][] = [];

  let tempItemArray: ILandingPageMenuDesktopItemModel[] = [];
  menuItems.forEach((item) => {
    if (tempItemArray.length >= maxItemPerColumn) {
      splitItemArray.push([...tempItemArray]);
      tempItemArray = [];
    }

    tempItemArray.push(item);
  });

  if (tempItemArray.length > 0) {
    splitItemArray.push([...tempItemArray]);
  }

  return splitItemArray;
};
