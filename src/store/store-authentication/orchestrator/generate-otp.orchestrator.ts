import { orchestrator } from 'satcheljs';
import { CommonMessageStore } from '../../store-common-message';
import { CoreLoadingStore } from '../../store-loading';
import { generateOtpAction, updatePhoneNumberAction } from '../action';
import { updateIdOtpAction, updateTimeRegenerateOtpAction } from '../mutator-action';
import { CONFIGURATION } from '../../../constants';

import { generateOtp2 } from '../../../api';
import dayjs from 'dayjs';
import { mergePhoneNumber } from '../../../utils';
import { ITranslatorParams } from '../../../configuration/language';

orchestrator(generateOtpAction, async ({ countryCode, phoneNumber, captcha }) => {
  const newFullPhoneNumber = countryCode && phoneNumber ? mergePhoneNumber(countryCode, phoneNumber) : undefined;
  if (!newFullPhoneNumber || !CONFIGURATION.FULL_PHONE_NUMBER_REGEX.test(newFullPhoneNumber)) {
    CommonMessageStore.updateErrorAction('1006');
    return;
  }

  CoreLoadingStore.updateLoadingAction(true);
  try {
    const response = await generateOtp2(newFullPhoneNumber, captcha);
    updateIdOtpAction(response._id);
    updatePhoneNumberAction(newFullPhoneNumber);
    updateTimeRegenerateOtpAction(dayjs().add(CONFIGURATION.GENERATE_OTP_COUNT_DOWN_DURATION, 's'));
  } catch (error) {
    CommonMessageStore.updateErrorAction(error as string | ITranslatorParams);
  }
  CoreLoadingStore.updateLoadingAction(false);
});
