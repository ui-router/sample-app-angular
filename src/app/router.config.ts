import { UIRouter, Category } from 'ui-router-core';
import { googleAnalyticsHook } from './util/ga';
import { requiresAuthHook } from './global/auth.hook';
import { Visualizer } from 'ui-router-visualizer';

export function routerConfigFn(router: UIRouter) {
  const transitionService = router.transitionService;
  requiresAuthHook(transitionService);
  googleAnalyticsHook(transitionService);

  router.trace.enable(Category.TRANSITION);
  router.plugin(Visualizer);
}
