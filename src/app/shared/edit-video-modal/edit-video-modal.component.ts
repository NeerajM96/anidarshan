import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-edit-video-modal',
  templateUrl: './edit-video-modal.component.html',
  styleUrls: ['./edit-video-modal.component.scss']
})
export class EditVideoModalComponent implements OnInit{
  thumbnailPreview:string = ''
  videoId:string = ''

  editForm = this.fb.group({
    thumbnail:[null],
    title:[''],
    description:[''],
  })

  oldThumbnail:boolean = true;

  constructor(private fb:FormBuilder, private dialogRef:MatDialogRef<EditVideoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private videoService:VideoService,
    ){

  }
  ngOnInit(): void {
    this.thumbnailPreview = this.data.videoData.thumbnail
    this.videoId = this.data.videoData._id
    // this.editForm.patchValue({
    //   // thumbnail:this.data.videoData.thumbnail,
    //   title:this.data.videoData.title,
    //   description:this.data.videoData.description
    // })
    this.setFormValue(this.data.videoData.title,this.data.videoData.description)
  }

  close(){
    this.dialogRef.close()
  }

  onImagePicked(event:Event, fileName:string){
    
    // TODO: Validate that file type is only image and not pdf etc.
    const htmlInput = (event.target as HTMLInputElement)
    if (htmlInput.files){
      const file = htmlInput.files[0]
      
      this.editForm.patchValue({[fileName]:file})
      // informs form that I have changed the value for below field, so validate it again
      const reader = new FileReader()
      reader.onload = () =>{
        this.thumbnailPreview = reader.result as string;
      }
      reader.readAsDataURL(file)
    }
  }

  updateVideo(){
    const title = this.editForm.value.title
    const description = this.editForm.value.description
    this.videoService.editVideo(this.videoId,title!,description!).subscribe(()=>{
      this.dialogRef.close(title)
    })
  }

  setFormValue(title:string, description:string){
    this.editForm.patchValue({
      title:title,
      description:description
    })
  }
}
