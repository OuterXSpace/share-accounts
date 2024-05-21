import { action } from 'satcheljs';

export const changePasswordAction = action(
  'changePasswordAction',
  (currentPassword: string, newPassword: string, confirmPassword: string) => ({
    currentPassword,
    newPassword,
    confirmPassword,
  }),
);
