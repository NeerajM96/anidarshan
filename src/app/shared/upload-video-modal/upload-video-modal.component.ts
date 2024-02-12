import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { VideoUploadStatusModalComponent } from '../video-upload-status-modal/video-upload-status-modal.component';
import { VideoService } from 'src/app/services/video.service';
import { ToastMessageService } from 'src/app/services/toast-message.service';

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

  thumbnailPreview:string = ''
  thumbnailName:string = ''
  videoFileName:string = ''
  maxAllowedFileSize:number = 20 //max size allowed 20mb 

  constructor(private fb:FormBuilder, private dialogRef:MatDialogRef<UploadVideoModalComponent>, 
    private dialog:MatDialog,
    private videoService:VideoService,
    private toastService:ToastMessageService
    ){

  }
  ngOnInit(): void {
    
  }

  onSave(){
    if(!this.uploadForm.valid){
      this.toastService .showError("All fields are required!")
      return
    }
    this.dialogRef.close()
    const video = this.uploadForm.value.video
    const thumbnail = this.uploadForm.value.thumbnail
    const title = this.uploadForm.value.title
    const description = this.uploadForm.value.description
    this.videoService.uploadAVideo(video!,thumbnail!,title!,description!).subscribe(res =>{
    })
    this.uploadVideoStatusDialog()
  }

  uploadVideoStatusDialog(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.panelClass = 'upload-status-dialog-modal'
    this.dialog.open(VideoUploadStatusModalComponent, dialogConfig)
  }

  onImagePicked(event:Event, fileName:string){
    
    // TODO: Validate that file type is only image and not pdf etc.

    const htmlInput = (event.target as HTMLInputElement)
    if (htmlInput.files){
      const file = htmlInput.files[0]
      
      this.uploadForm.patchValue({[fileName]:file})
      // informs form that I have changed the value for below field, so validate it again
      this.uploadForm.get(fileName)?.updateValueAndValidity()
      const reader = new FileReader()
      reader.onload = () =>{
        if(fileName == "thumbnail"){
          this.thumbnailPreview = reader.result as string;
          this.thumbnailName = file.name
        }
        else{
          this.videoFileName = file.name
          const videoFileSize = Math.round(file.size / (1024*1024)); // Convert bytes to megabytes
          if(videoFileSize > this.maxAllowedFileSize){
            this.toastService .showError(`File size must be less than ${this.maxAllowedFileSize} MB!`)
            return
          }
        }
      }
      reader.readAsDataURL(file)
    }
    
  }

}
