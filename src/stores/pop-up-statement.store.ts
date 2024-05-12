import { observable, action, makeObservable } from 'mobx';
import Cookies from 'js-cookie';

class PopUpStatementStore {
  closePopup: boolean = false;

  constructor() {
    makeObservable(this, {
      closePopup: observable,
      setClosePopup: action,
    });

    // Load closePopup value from the cookie when the store is initialized
    this.loadClosePopupFromCookie();
  }

  setClosePopup = async (isCancelOnly: boolean) => {
    this.closePopup = true;

    // Save the closePopup value to the cookie
    if (!isCancelOnly) {
      Cookies.set('closePopup', 'yes', { expires: 30 });
    }
  };

  loadClosePopupFromCookie() {
    // Load closePopup value from the cookie
    const closePopupValue = Cookies.get('closePopup');

    if (closePopupValue === 'yes') {
      this.closePopup = true;
    }
  }
}

export const popUpStatementStore = new PopUpStatementStore();
