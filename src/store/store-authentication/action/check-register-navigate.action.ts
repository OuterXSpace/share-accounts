import { NextRouter } from 'next/router';
import { action } from 'satcheljs';

/**
 * - Navigate to Register page if has no logged in yet
 */
export const checkRegisterNavigateAction = action('checkRegisterNavigateAction', (router?: NextRouter) => {
  return { router };
});
