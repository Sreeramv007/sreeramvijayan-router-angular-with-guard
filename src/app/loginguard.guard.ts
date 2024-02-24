import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TestService } from './test.service';

export const loginguardGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let service = inject(TestService);
  let myvariable = service.getMyVariable();
  if(true){
    router.navigateByUrl('/landing')
    return false
  }
  return true;
};

