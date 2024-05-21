import { orchestrator } from 'satcheljs';
import { updateIsMustVerifyPhoneAction } from '../action';
import { CONFIGURATION } from '../../../constants';

orchestrator(updateIsMustVerifyPhoneAction, ({ value }) => {
  if (value) localStorage.setItem(CONFIGURATION.IS_MUST_VERIFY_PHONE_LS_KEY, `${value}`);
  else localStorage.removeItem(CONFIGURATION.IS_MUST_VERIFY_PHONE_LS_KEY);
});
