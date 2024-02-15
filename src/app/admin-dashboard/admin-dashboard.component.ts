import { Component, Input, OnInit } from '@angular/core';
import { DataStoreService } from '../services/data-store.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteVideoModalComponent } from '../shared/delete-video-modal/delete-video-modal.component';
import { UploadVideoModalComponent } from '../shared/upload-video-modal/upload-video-modal.component';
import { VideoUploadStatusModalComponent } from '../shared/video-upload-status-modal/video-upload-status-modal.component';
import { EditVideoModalComponent } from '../shared/edit-video-modal/edit-video-modal.component';
import { VideoService } from '../services/video.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  @Input()
  channelName:string = 'User'
  data:any;
  totalViews:number = 221234
  totalSubscribers:number = 4053
  totalLikes:number = 63021
  username:string = ''

  constructor(private dataStore:DataStoreService, private dialog:MatDialog, private videoService:VideoService,
    private authService:AuthService,
    ){
    this.dataStore.showSideBar.next(false)
  }

  ngOnInit(): void {
    this.username = this.authService.getUsername()
    this.videoService.getAllVideos(this.username).subscribe(res =>{
      this.data = res.data
    })
  }

  togglePublish(event:Event, id:number){
    // Prevent the default behavior of the checkbox
    /* 
    If you use (click) without event.preventDefault(), your custom logic in the toggle method might execute after the default behavior, 
    leading to unexpected behavior. For example, the checkbox could change its state, and then your toggle method could run, 
    resulting in a toggle that doesn't match the underlying data.
    */
    event.preventDefault();
    this.data[id].isPublished = !this.data[id].isPublished
  }

  deleteVideoDialog(id:number){
    const dialogConfig = new MatDialogConfig()
    const videoId = this.data[id]._id
    dialogConfig.panelClass = 'delete-video-dialog-modal'
    dialogConfig.data = {
      videoId:videoId
    }
    const deleteDialogRef = this.dialog.open(DeleteVideoModalComponent, dialogConfig)
    deleteDialogRef.afterClosed().subscribe(()=>{
      this.data.splice(id,1)
    })
  }

  editVideoDialog(id:number){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.panelClass = 'edit-video-dialog-modal'
    dialogConfig.data = {
      videoData:this.data[id]
    }
    const editDialogRef = this.dialog.open(EditVideoModalComponent, dialogConfig)
    editDialogRef.afterClosed().subscribe(title => {
      if(title){
        this.data[id].title = title
      }
    })
  }

}
