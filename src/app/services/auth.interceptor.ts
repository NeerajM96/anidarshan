import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, config, switchMap, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { ErrorParserService } from './error-parser.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private _snackbar:MatSnackBar, private errorParseService:ErrorParserService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const accessToken = this.authService.getAccessToken();
    const accessToken = localStorage.getItem("accessToken");
    // Check if the request body is FormData
    if (req.body instanceof FormData) {
      // Clone the request and append the access token to FormData
      const authRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      });
      // Don't modify the FormData here, as it may not behave well with spreading
      return next.handle(authRequest).pipe(
        catchError(err => {
          this.showMessage(err.error)
          return new Observable<HttpEvent<any>>();
        })
      );
    } else {
      // For non-FormData requests, include the access token in the body. using spread operator was not adding form data to request,
    //   so seperated requests for form data and non-form data
      const authRequest = req.clone({
        body: { ...req.body, accessToken },
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      });
      return next.handle(authRequest).pipe(
        catchError(err => {
          if (err.status === 401 && !req.url.includes('refresh-token')) {
            return this.handle401Error(req, next);
          }
          this.showMessage(err.error)
          return new Observable<HttpEvent<any>>();
        })
      );
    }
  }
  
  showMessage(error:string){
    const message = this.errorParseService.parseHtmlError(error)
    const config = new MatSnackBarConfig()
    config.duration = 4000
    config.panelClass = ['snackbar-message-box']   //can pas string or string[]
    config.horizontalPosition = 'end'
    config.verticalPosition  = 'top'
    this._snackbar.open(message,'',config)
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Refresh the access token
    return this.authService.refreshAccessToken().pipe(
        switchMap((res: any) => {
        // Retry the original request with the new access token
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${res.data.accessToken}`
          }
        });
        return next.handle(request);
      }),
      catchError((error) => {
        // If refresh token failed or expired, redirect to login page
        this.authService.logout();
        return throwError(() => error);
      })
    );
  }
}
