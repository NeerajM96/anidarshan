import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-delete-video-modal',
  templateUrl: './delete-video-modal.component.html',
  styleUrls: ['./delete-video-modal.component.scss']
})
export class DeleteVideoModalComponent {
  deleteVideoFlag:boolean = false

  constructor(private dialogRef:MatDialogRef<DeleteVideoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private videoService:VideoService
    ){

  }

  deleteVideo(){
    this.videoService.deleteVideoById(this.data.videoId).subscribe(()=>{
      this.deleteVideoFlag = true
      this.close()
    })
  }

  close(){
    this.dialogRef.close(this.deleteVideoFlag)
  }
}
