import { NextRouter } from 'next/router';
import { action } from 'satcheljs';

export const logOutAction = action('logOutAction', (redirectUrl?: string, router?: NextRouter) => ({
  redirectUrl,
  router,
}));
