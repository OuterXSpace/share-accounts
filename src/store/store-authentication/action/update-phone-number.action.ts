import { action } from 'satcheljs';

export const updatePhoneNumberAction = action('updatePhoneNumberAction', (phone?: string) => ({ phone }));
