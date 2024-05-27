import { action } from 'satcheljs';

export const updateLoginUrlAction = action('updateLoginUrlAction', (url: string) => ({ url }));
