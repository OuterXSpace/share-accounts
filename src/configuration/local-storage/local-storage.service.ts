import SecureLs from 'secure-ls';

class LocalStorageServiceFactory {
  private static _instance: LocalStorageServiceFactory;

  public static instance(): LocalStorageServiceFactory {
    if (!this._instance) {
      this._instance = new LocalStorageServiceFactory();
    }

    return this._instance;
  }

  private _ls: SecureLs;

  private constructor() {
    this._ls = new SecureLs({
      encodingType: 'aes',
      encryptionSecret: '$2a$09$VxJYNLG7qXXVgAbFTvI9qubCa0YL1ww88I7UI6tkPiBEEixs3tlCa',
    });
  }

  // * nếu không có data trong local storage, func sẽ return về string empty
  private getEncryptedItem = <T>(key: string): T | '' => {
    return this._ls.get(key) as T;
  };

  // * nếu không có data trong local storage, func sẽ return về string empty
  private getRawItem = <T>(key: string): T | '' => {
    return JSON.parse(localStorage.getItem(key) ?? '""') as T;
  };

  private setItemWithEncrypt = <T = any>(key: string, data: T) => {
    this._ls.set(key, data);
  };

  private setRawItem = <T>(key: string, data: T) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  // * nếu không có data trong local storage, func sẽ return về string empty
  public getItem = <T = string>(key: string, encrypt: boolean = true): T | '' => {
    return encrypt ? this.getEncryptedItem<T>(key) : this.getRawItem<T>(key);
  };

  public setItem = <T = any>(key: string, data: T, encrypt: boolean = true) => {
    if (data === null) return;
    encrypt ? this.setItemWithEncrypt(key, data) : this.setRawItem(key, data);
  };

  public removeItem = (key: string) => {
    return this._ls.remove(key);
  };

  public encrypt = (data: any) => {
    return this._ls.processData(data, true);
  };
}

export const LocalStorageService = LocalStorageServiceFactory.instance();

(window as any).setEncryptData = LocalStorageService.setItem;
(window as any).getEncryptData = LocalStorageService.getItem;
