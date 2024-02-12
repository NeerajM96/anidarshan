import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UploadVideoModalComponent } from 'src/app/shared/upload-video-modal/upload-video-modal.component';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.scss']
})
export class UploadVideoComponent {
  constructor(private dialog:MatDialog){

  }
  uploadVideoDialog(){
    const dialogConfig = new MatDialogConfig()
    // // we are overriding a couple of default behaviors
    // // user will not be able to close the dialog just by clicking outside of it
    // dialogConfig.disableClose = true
    
    // // the focus will be set automatically on the first form field of the dialog
    // dialogConfig.autoFocus = true
    dialogConfig.panelClass = 'upload-dialog-modal'
    this.dialog.open(UploadVideoModalComponent, dialogConfig)
  }
}
