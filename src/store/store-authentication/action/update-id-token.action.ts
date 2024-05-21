import { action } from 'satcheljs';

export const updateIdTokenAction = action('updateIdTokenAction', (idToken: string | undefined) => ({ idToken }));
