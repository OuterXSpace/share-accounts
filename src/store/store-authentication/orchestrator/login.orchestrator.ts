import { orchestrator } from 'satcheljs';
import { loginAction, updateAccessTokenAction } from '../action';
import { CommonMessageStore } from '../../store-common-message';
import { CoreLoadingStore } from '../../store-loading';
import { backToRedirectUrl } from '../util';
import { CoreUserProfileStore } from '../../store-user-profile';
import { loginAPI } from '../../../api';
import { ITranslatorParams } from '../../../configuration/language';

orchestrator(loginAction, async (actionMessage) => {
  const { email, password } = actionMessage;

  CoreLoadingStore.updateLoadingAction(true);

  try {
    const { data } = await loginAPI(email, password);

    const { accessToken } = data.data;

    updateAccessTokenAction(accessToken);

    // redirect
    CoreUserProfileStore.fetchProfileAction();
    backToRedirectUrl(500);
  } catch (error) {
    CommonMessageStore.updateErrorAction(error as string | ITranslatorParams);
  } finally {
    CoreLoadingStore.updateLoadingAction(false);
  }
});
