import { CommonMessageStore } from '../../store-common-message';
import { orchestrator } from 'satcheljs';
import { loginAction, registerAction } from '../action';
import { CoreLoadingStore } from '../../store-loading';
import { registerAPI } from '../../../api';

orchestrator(registerAction, (actionMessage) => {
  const { email, username, password, fullName } = actionMessage;

  if (password.length < 6) {
    CommonMessageStore.updateErrorAction('form.password.invalid');
    return;
  }

  CoreLoadingStore.updateLoadingAction(true);
  registerAPI(email, username, password, fullName)
    .then((response) => {
      if (response) {
        loginAction(email, password);
      }
    })
    .catch((error) => {
      CommonMessageStore.updateErrorAction(error);
    })
    .finally(() => {
      CoreLoadingStore.updateLoadingAction(false);
    });
});
