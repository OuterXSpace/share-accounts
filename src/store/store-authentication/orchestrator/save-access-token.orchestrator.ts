import { orchestrator } from 'satcheljs';
import { updateAccessTokenAction } from '../action';
import { CONFIGURATION } from '../../../constants';

import { setApiAccessToken } from '../../../api';
import { LocalStorageService } from '../../../configuration/local-storage';

orchestrator(updateAccessTokenAction, ({ accessToken }) => {
  setApiAccessToken(accessToken);
  if (accessToken) LocalStorageService.setItem(CONFIGURATION.ACCESS_TOKEN_LS_KEY, accessToken);
  else LocalStorageService.removeItem(CONFIGURATION.ACCESS_TOKEN_LS_KEY);
});
