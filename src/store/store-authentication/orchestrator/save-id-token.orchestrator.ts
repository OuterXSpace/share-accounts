import { orchestrator } from 'satcheljs';
import { updateIdTokenAction } from '../action';
import { CONFIGURATION } from '../../../constants';

import { LocalStorageService } from '../../../configuration/local-storage';

orchestrator(updateIdTokenAction, ({ idToken }) => {
  if (idToken) LocalStorageService.setItem(CONFIGURATION.ID_TOKEN_LS_KEY, idToken);
  else LocalStorageService.removeItem(CONFIGURATION.ID_TOKEN_LS_KEY);
});
