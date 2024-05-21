import { CONFIGURATION } from '../../../constants';

import { AppHistory } from '../../store-router-manager';

export const goToVerifyPhone = (delay?: number) => {
  if (!delay || delay < 0) AppHistory().push(CONFIGURATION.VERIFY_PHONE_ROUTE_PATH);
  else {
    setTimeout(() => {
      AppHistory().push(CONFIGURATION.VERIFY_PHONE_ROUTE_PATH);
    }, delay);
  }
};
