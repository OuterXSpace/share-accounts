import { CONFIGURATION } from '../constants';

export const validatePassword = (password: string) => {
  return CONFIGURATION.PASSWORD_REGEX.test(password);
};
