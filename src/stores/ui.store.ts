import { observable, action, makeObservable } from "mobx";

class UIStore {
  isOpenNavbar: boolean = false;

  constructor() {
    makeObservable(this, {
      isOpenNavbar: observable,
      setOpenNavbar: action,
    });
  }

  setOpenNavbar = async (isOpenNavbar: boolean) => {
    this.isOpenNavbar = isOpenNavbar;
  };
}

export const uIStore = new UIStore();
