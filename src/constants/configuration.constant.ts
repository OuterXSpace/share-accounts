import { Language } from '../configuration/language';

export const LOGIN_ROUTE_PATH = '/login';
export const VERIFY_PHONE_ROUTE_PATH = '/login/verify-phone';
export const API_UI_CONFIG_BASE_URL = '/common/ui-config';

export const DEFAULT_PHONE_MUST_VERIFY = '+84';

// * Regular expression
export const PASSWORD_REGEX = /^.{6,}$/;
export const PHONE_NUMBER_REGEX = /^[0-9]{7,11}$/;
export const FULL_PHONE_NUMBER_REGEX = /^\+[0-9]{9,14}$/;
export const CLEAN_PHONE_NUMBER_REGEX = /(^0)|\s|\r|\n|-/g;
export const OTP_REGEX = /^[0-9]{3,}$/;
export const REGEX_MAIL =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const REGEX_PASSWORD = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
export const REGEX_PHONE = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
export const REGEX_LINK_IMAGE =
  /(http)|(Https)|(data:image)|(\/assets\/public)|(\/assets\/common)|(\/assets)|(\/cdn\/common)|(\/cdn\/public)|(\/cdn)/g;

export const PHONE_COUNTRY_CODES = ['+84', '+65', '+63', '+86'];
export const GENERATE_OTP_COUNT_DOWN_DURATION = 180; // * seconds

export const DEFAULT_CURRENCY = 'VND';
export const DEFAULT_LANGUAGE: Language = 'vi';
export const DEFAULT_LANGUAGES: Language[] = ['vi'];

// * local storage
export const UI_CONTENT_VERSIONS_LS_KEY = 'ui-content-versions';
export const SYSTEM_CONFIG_CONTENT_ID_LS_KEY = 'system-config';
export const ID_TOKEN_LS_KEY = 'idToken';
export const ACCESS_TOKEN_LS_KEY = 'accessToken';
export const LOGIN_URL_LS_KEY = 'loginUrl';
export const REGISTER_URL_LS_KEY = 'registerUrl';
export const PHONE_NUMBER_LS_KEY = 'phoneNumber';
export const IS_MUST_VERIFY_PHONE_LS_KEY = 'isMustVerify';

//* Day js
export const MOMENT_UPDATE_LOCALE_EN = {
  relativeTime: {
    future: 'in %s',
    past: '%s',
    s: '1 sec',
    ss: '%d sec',
    m: '1 min',
    mm: '%d min',
    h: '1h',
    hh: '%dh',
    d: '1d',
    dd(number: number) {
      if (number < 7) {
        return `${number}d`;
      }
      const weeks = Math.round(number / 7);
      return `${weeks}w`;
    },
    M: '1m',
    MM: '%dm',
    y: '1y',
    yy: '%dy',
  },
};

export const MOMENT_UPDATE_LOCALE_VI = {
  relativeTime: {
    future: 'in %giây',
    past: '%s',
    s: '1 giây',
    ss: '%d sec',
    m: '1 phút',
    mm: '%d phút',
    h: '1 giờ',
    hh: '%dh',
    d: '1 ngày',
    dd(number: number) {
      if (number < 7) {
        return `${number} ngày`;
      }
      const weeks = Math.round(number / 7);
      return `${weeks} tuần`;
    },
    M: '1 tháng',
    MM: '%dm',
    y: '1 năm',
    yy: '%dy',
  },
};
