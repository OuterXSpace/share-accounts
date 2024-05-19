import { orchestrator } from 'satcheljs';
import { updateLoginUrlAction } from '../action';
import { CONFIGURATION } from '../../../constants';

import { LocalStorageService } from '../../../configuration/local-storage';

orchestrator(updateLoginUrlAction, ({ url }) => {
  LocalStorageService.setItem(CONFIGURATION.LOGIN_URL_LS_KEY, url);
});
