import dayjs from 'dayjs';
import { IObservableValue } from 'mobx';

export interface IAuthenticationStore {
  idToken: string | undefined;
  accessToken: string | undefined;

  loginUrl: string;
  registerUrl: string;

  phoneNumber: string | undefined;
  isMustVerifyPhone: boolean;
  idOtp: string | undefined;
  timeRegenerateOtp: dayjs.Dayjs | undefined;

  isChangedPasswordSuccess: IObservableValue<boolean | undefined>;
}
