import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-video-upload-status-modal',
  templateUrl: './video-upload-status-modal.component.html',
  styleUrls: ['./video-upload-status-modal.component.scss']
})
export class VideoUploadStatusModalComponent implements OnInit{
  fileName='Dashboard prototype'
  fileType='recording.mp4'
  fileSize='16 MB'
  statusMessage = 'Uploaded Successfully'
  title='Uploaded Video'
  uploadFinished:boolean = false

  constructor(private dialogRef:MatDialogRef<VideoUploadStatusModalComponent>){

  }
  ngOnInit(): void {
    setTimeout(()=>{
      this.uploadFinished = true
    },4000)
  }


  close(){
    this.dialogRef.close()
  }
}
