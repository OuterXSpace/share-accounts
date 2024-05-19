import { action } from 'satcheljs';

/**
 * @deprecated use **checkAuthenticatedNavigateAction** instead
 * - Check and Redirect to login page if idToken missing or expired
 * - Can change login page path by **updateLoginUrlAction**
 */
export const checkAuthenticatedAction = action('checkAuthenticatedAction', (redirectUrl?: string) => {
  return { redirectUrl };
});
