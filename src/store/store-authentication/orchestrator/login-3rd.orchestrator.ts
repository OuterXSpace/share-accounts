import { orchestrator } from 'satcheljs';
import { login3rdAction, updateAccessTokenAction } from '../action';
import { CommonMessageStore } from '../../store-common-message';
import { CoreLoadingStore } from '../../store-loading';
import { backToRedirectUrl } from '../util';
import { CoreUserProfileStore } from '../../store-user-profile';
import { login3rdAPI } from '../../../api';
import { ITranslatorParams } from '../../../configuration/language';

orchestrator(login3rdAction, async (actionMessage) => {
  const { typeLogin, token } = actionMessage;

  CoreLoadingStore.updateLoadingAction(true);

  try {
    const { data } = await login3rdAPI(typeLogin, token);

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
