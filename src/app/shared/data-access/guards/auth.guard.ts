import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthFacade } from '../../../feature/auth/data-access/auth.facade';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthFacade);
  const router = inject(Router);

  if (auth.session()) {
    return true;
  }

  return router.createUrlTree(['/auth/login']);
};
