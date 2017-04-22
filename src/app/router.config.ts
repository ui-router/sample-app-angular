import { UIRouter, Category } from '@uirouter/core';
import { Visualizer } from '@uirouter/visualizer';

import { googleAnalyticsHook } from './util/ga';
import { requiresAuthHook } from './global/auth.hook';

export function routerConfigFn(router: UIRouter) {
  const transitionService = router.transitionService;
  requiresAuthHook(transitionService);
  googleAnalyticsHook(transitionService);

  router.trace.enable(Category.TRANSITION);
  router.plugin(Visualizer);
}
