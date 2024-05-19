import { action } from 'satcheljs';

export const updateRegisterUrlAction = action('updateRegisterUrlAction', (url: string) => ({ url }));
