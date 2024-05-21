import { orchestrator } from 'satcheljs';
import { CommonMessageStore } from '../../store-common-message';
import { CoreLoadingStore } from '../../store-loading';
import { CoreUserProfileStore } from '../../store-user-profile';
import { verifyOtpAction, updateIsMustVerifyPhoneAction, updatePhoneNumberAction } from '../action';
import { idOtpSelector } from '../selector';
import { backToHome } from '../util';
import { CONFIGURATION } from '../../../constants';

import { verifyOtp } from '../../../api';
import { ITranslatorParams } from '../../../configuration/language';

orchestrator(verifyOtpAction, async ({ code }) => {
  const idOtp = idOtpSelector();
  if (!idOtp) return;
  if (!CONFIGURATION.OTP_REGEX.test(code)) {
    CommonMessageStore.updateErrorAction('1009');
    return;
  }

  CoreLoadingStore.updateLoadingAction(true);
  try {
    await verifyOtp({ id: idOtp, code });
    CommonMessageStore.updateSuccessAction('verify_phone');
    updatePhoneNumberAction(undefined);
    updateIsMustVerifyPhoneAction(false);
    // * fetch user info neu chua co
    !CoreUserProfileStore.profileSelector() && CoreUserProfileStore.fetchProfileAction();
    backToHome(500);
  } catch (error) {
    CommonMessageStore.updateErrorAction(error as string | ITranslatorParams);
  }
  CoreLoadingStore.updateLoadingAction(false);
});
