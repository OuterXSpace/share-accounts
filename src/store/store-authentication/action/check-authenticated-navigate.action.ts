import { action } from 'satcheljs';

/**
 * * dùng trong trường hợp cần check auth và redirect nếu chưa login
 * * redirect to login page if not login yet
 * * redirect to verify phone page if login but must verify phone
 * * Can change login page path by **updateLoginUrlAction**
 */
export const checkAuthenticatedNavigateAction = action(
  'checkAuthenticatedNavigateAction',
  (isRedirectLogin?: boolean, redirectUrl?: string) => ({ redirectUrl, isRedirectLogin }),
);
