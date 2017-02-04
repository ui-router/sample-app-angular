import { UIRouter } from 'ui-router-core';
import { googleAnalyticsHook } from './util/ga';
import { requiresAuthHook } from './global/auth.hook';

export function routerConfigFn(router: UIRouter) {
  const transitionService = router.transitionService;
  requiresAuthHook(transitionService);
  googleAnalyticsHook(transitionService);
}
