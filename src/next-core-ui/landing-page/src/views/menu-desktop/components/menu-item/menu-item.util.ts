import { IMenuItemModel } from './menu-item.type';

export const splitSubmenuSectionItems = (menuItems: IMenuItemModel[], maxItemPerColumn: number): IMenuItemModel[][] => {
  const splitItemArray: IMenuItemModel[][] = [];

  let tempItemArray: IMenuItemModel[] = [];
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
