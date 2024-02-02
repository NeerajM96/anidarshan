import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { VideoUploadStatusModalComponent } from '../video-upload-status-modal/video-upload-status-modal.component';

@Component({
  selector: 'app-upload-video-modal',
  templateUrl: './upload-video-modal.component.html',
  styleUrls: ['./upload-video-modal.component.scss']
})
export class UploadVideoModalComponent implements OnInit{

  uploadForm = this.fb.group({
    video:[null, Validators.required],
    thumbnail:[null, Validators.required],
    title:['', Validators.required],
    description:['', Validators.required],
  })

  constructor(private fb:FormBuilder, private dialogRef:MatDialogRef<UploadVideoModalComponent>, private dialog:MatDialog){

  }
  ngOnInit(): void {
    
  }

  onSave(){
    this.dialogRef.close()
    this.uploadVideoStatusDialog()
  }

  uploadVideoStatusDialog(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.panelClass = 'upload-status-dialog-modal'
    this.dialog.open(VideoUploadStatusModalComponent, dialogConfig)
  }


}
