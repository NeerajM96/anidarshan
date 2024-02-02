import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-video-modal',
  templateUrl: './edit-video-modal.component.html',
  styleUrls: ['./edit-video-modal.component.scss']
})
export class EditVideoModalComponent {
  thumbnailPreview:string = 'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  editForm = this.fb.group({
    thumbnail:[null],
    title:['',Validators.required],
    description:['',Validators.required],
  })

  oldThumbnail:boolean = true;

  constructor(private fb:FormBuilder, private dialogRef:MatDialogRef<EditVideoModalComponent>){

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
      this.editForm.get(fileName)?.updateValueAndValidity()
      const reader = new FileReader()
      reader.onload = () =>{
        this.thumbnailPreview = reader.result as string;
      }
      reader.readAsDataURL(file)
    }
  }
}
