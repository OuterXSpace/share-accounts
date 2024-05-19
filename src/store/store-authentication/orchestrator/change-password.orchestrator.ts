import { orchestrator } from 'satcheljs';
import { CommonMessageStore } from '../../store-common-message';
import { CoreLoadingStore } from '../../store-loading';
import { changePasswordAction } from '../action';
import { updateIsChangedPasswordSuccess } from '../mutator-action';
import { changePasswordApi } from '../../../api';
import { validatePassword } from '../../../utils';
import { ITranslatorParams } from '../../../configuration/language';

orchestrator(changePasswordAction, async ({ currentPassword, newPassword, confirmPassword }) => {
  if (!validatePassword(currentPassword)) {
    CommonMessageStore.updateErrorAction('1017');
    return;
  }
  if (!validatePassword(newPassword)) {
    CommonMessageStore.updateErrorAction('1021');
    return;
  }
  if (currentPassword === newPassword) {
    CommonMessageStore.updateErrorAction('new_password.equal.current_password');
    return;
  }
  if (newPassword !== confirmPassword) {
    CommonMessageStore.updateErrorAction('confirm_password.not_match');
    return;
  }

  CoreLoadingStore.updateLoadingAction(true);
  try {
    await changePasswordApi(currentPassword, newPassword);
    CommonMessageStore.updateSuccessAction('changed_password');
    updateIsChangedPasswordSuccess(true);
  } catch (error) {
    CommonMessageStore.updateErrorAction(error as string | ITranslatorParams);
  }
  CoreLoadingStore.updateLoadingAction(false);
});
