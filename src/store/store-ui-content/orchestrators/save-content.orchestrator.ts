import { orchestrator } from 'satcheljs';
import { LocalStorageService } from '../../../configuration/local-storage';
import { updateContentAction } from '../actions';

orchestrator(updateContentAction, ({ contentId, data, storeLocal }) => {
  if (storeLocal) LocalStorageService.setItem(contentId, data);
});
