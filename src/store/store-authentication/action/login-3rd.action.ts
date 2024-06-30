import { action } from 'satcheljs';

export const login3rdAction = action('login3rdAction', (typeLogin: 'google' | 'facebook', token: string) => {
  return { typeLogin, token };
});
