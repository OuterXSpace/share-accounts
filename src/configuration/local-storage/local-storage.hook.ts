import { LocalStorageService } from '.';

export const useLocalStorage = (): {
  getLocalStorageItem: (key: string) => any;
  setLocalStorageItem: (key: string, data: any) => void;
} => {
  return {
    getLocalStorageItem: LocalStorageService.getItem,
    setLocalStorageItem: LocalStorageService.setItem,
  };
};
