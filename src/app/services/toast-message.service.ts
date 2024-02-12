import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  constructor(private _snackbar:MatSnackBar) { }
  showError(error:string){
    const config = new MatSnackBarConfig()
    config.duration = 4000
    config.panelClass = ['snackbar-error-message-box']   //can pas string or string[]
    config.horizontalPosition = 'end'
    config.verticalPosition  = 'top'
    this._snackbar.open(error,'',config)
  }
}
