import { Router } from 'next/router';

export type NextRouterLocal = Pick<
  Router,
  | 'push'
  | 'replace'
  | 'reload'
  | 'back'
  | 'forward'
  | 'prefetch'
  | 'beforePopState'
  | 'events'
  | 'isFallback'
  | 'isReady'
  | 'isPreview'
>;
