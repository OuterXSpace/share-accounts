import { action } from 'satcheljs';

export const updateIsMustVerifyPhoneAction = action('updateIsMustVerifyPhoneAction', (value: boolean) => ({ value }));
