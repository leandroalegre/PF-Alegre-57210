import { inject } from '@angular/core';
import { CanActivateFn, createUrlTreeFromSnapshot, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
 const isAutenticate = true;
 const router = inject(Router);
  return isAutenticate ? true : router.createUrlTree(['auth','login']);
};
