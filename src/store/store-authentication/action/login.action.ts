import { action } from 'satcheljs';

export const loginAction = action('loginAction', (email: string, password: string) => {
  return { email, password };
});
