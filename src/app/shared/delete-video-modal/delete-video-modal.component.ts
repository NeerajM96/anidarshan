import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-video-modal',
  templateUrl: './delete-video-modal.component.html',
  styleUrls: ['./delete-video-modal.component.scss']
})
export class DeleteVideoModalComponent {
  constructor(private dialogRef:DialogRef<DeleteVideoModalComponent>){

  }

  close(){
    this.dialogRef.close()
  }
}
