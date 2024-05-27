import { action } from 'satcheljs';

/**
 * - Auto login if register success
 */
export const registerAction = action(
  'registerAction',
  (email: string, username: string, password: string, fullName: string) => {
    return { email, username, password, fullName };
  },
);
