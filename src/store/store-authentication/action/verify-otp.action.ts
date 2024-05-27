import { action } from 'satcheljs';

export const verifyOtpAction = action('verifyOtpAction', (code: string) => ({ code }));
