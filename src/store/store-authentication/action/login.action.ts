import { action } from 'satcheljs';

export const loginAction = action('loginAction', (username: string, password: string) => {
  return { username, password };
});
