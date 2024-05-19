import { orchestrator } from 'satcheljs';
import { updateRegisterUrlAction } from '../action';
import { CONFIGURATION } from '../../../constants';

import { LocalStorageService } from '../../../configuration/local-storage';

orchestrator(updateRegisterUrlAction, ({ url }) => {
  LocalStorageService.setItem(CONFIGURATION.REGISTER_URL_LS_KEY, url);
});
