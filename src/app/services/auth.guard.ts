import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { ToastMessageService } from "./toast-message.service";

@Injectable({
    providedIn: 'root'
  })
  class PermissionsService {
  
    constructor(private router: Router, private authService:AuthService, private toastService:ToastMessageService) {}
  
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        //your logic goes here
        const isAuth = this.authService.isAuthenticated()
        if(!isAuth){
            this.toastService.showError("Please login to acces this route!")
            this.router.navigate(['/']);
            return false
        }
        return isAuth

    }
  }
  
  export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(PermissionsService).canActivate(next, state);
  }