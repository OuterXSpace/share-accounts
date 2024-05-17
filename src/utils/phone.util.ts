import { CONFIGURATION } from '../constants';

export const splitPhoneCountryCode = (
  phoneNumber: string,
  countryCodes: string[] = CONFIGURATION.PHONE_COUNTRY_CODES,
): [string, string] => {
  if (phoneNumber[0] !== '+') return ['', phoneNumber];

  for (let index = 0; index < countryCodes.length; index++) {
    const code = countryCodes[index];
    if (!phoneNumber.includes(code)) continue;

    return [code, phoneNumber.replace(code, '')];
  }

  return ['', phoneNumber];
};

export const mergePhoneNumber = (countryCode: string, phoneNumber: string): string => {
  return `${countryCode}${phoneNumber.replace(CONFIGURATION.CLEAN_PHONE_NUMBER_REGEX, '')}`;
};
