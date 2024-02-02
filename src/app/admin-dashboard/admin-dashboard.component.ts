import { Component, Input, OnInit } from '@angular/core';
import { DataStoreService } from '../services/data-store.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteVideoModalComponent } from '../shared/delete-video-modal/delete-video-modal.component';
import { UploadVideoModalComponent } from '../shared/upload-video-modal/upload-video-modal.component';
import { VideoUploadStatusModalComponent } from '../shared/video-upload-status-modal/video-upload-status-modal.component';
import { EditVideoModalComponent } from '../shared/edit-video-modal/edit-video-modal.component';

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

  constructor(private dataStore:DataStoreService, private dialog:MatDialog){
    this.dataStore.showSideBar.next(false)
  }

  ngOnInit(): void {
    
    this.data = [
      {
        published:true,
        thumbnail:'https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'JavaScript Fundamentals: Variables and Data Types',
        likes:921,
        dislikes:49,
        dateUploaded:'9/22/2023'
      },
      {
        published:false,
        thumbnail:'https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'React Hooks Explained: useState and useEffect',
        likes:2520,
        dislikes:349,
        dateUploaded:'9/21/2023'
      },
      {
        published:false,
        thumbnail:'https://images.pexels.com/photos/3532549/pexels-photo-3532549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Mastering Async Await in JavaScript',
        likes:943,
        dislikes:244,
        dateUploaded:'9/18/2023'
      },
      {
        published:true,
        thumbnail:'https://images.pexels.com/photos/2519812/pexels-photo-2519812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Getting Started with Express.js',
        likes:906,
        dislikes:14,
        dateUploaded:'9/16/2023'
      },
      {
        published:true,
        thumbnail:'https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'JavaScript Fundamentals: Variables and Data Types',
        likes:921,
        dislikes:49,
        dateUploaded:'9/22/2023'
      },
      {
        published:false,
        thumbnail:'https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'React Hooks Explained: useState and useEffect',
        likes:2520,
        dislikes:349,
        dateUploaded:'9/21/2023'
      },
      {
        published:false,
        thumbnail:'https://images.pexels.com/photos/3532549/pexels-photo-3532549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Mastering Async Await in JavaScript',
        likes:943,
        dislikes:244,
        dateUploaded:'9/18/2023'
      },
      {
        published:true,
        thumbnail:'https://images.pexels.com/photos/2519812/pexels-photo-2519812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Getting Started with Express.js',
        likes:906,
        dislikes:14,
        dateUploaded:'9/16/2023'
      },
      {
        published:true,
        thumbnail:'https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'JavaScript Fundamentals: Variables and Data Types',
        likes:921,
        dislikes:49,
        dateUploaded:'9/22/2023'
      },
      {
        published:false,
        thumbnail:'https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'React Hooks Explained: useState and useEffect',
        likes:2520,
        dislikes:349,
        dateUploaded:'9/21/2023'
      },
      {
        published:false,
        thumbnail:'https://images.pexels.com/photos/3532549/pexels-photo-3532549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Mastering Async Await in JavaScript',
        likes:943,
        dislikes:244,
        dateUploaded:'9/18/2023'
      },
      {
        published:true,
        thumbnail:'https://images.pexels.com/photos/2519812/pexels-photo-2519812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Getting Started with Express.js',
        likes:906,
        dislikes:14,
        dateUploaded:'9/16/2023'
      },
      {
        published:true,
        thumbnail:'https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'JavaScript Fundamentals: Variables and Data Types',
        likes:921,
        dislikes:49,
        dateUploaded:'9/22/2023'
      },
      {
        published:false,
        thumbnail:'https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'React Hooks Explained: useState and useEffect',
        likes:2520,
        dislikes:349,
        dateUploaded:'9/21/2023'
      },
      {
        published:false,
        thumbnail:'https://images.pexels.com/photos/3532549/pexels-photo-3532549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Mastering Async Await in JavaScript',
        likes:943,
        dislikes:244,
        dateUploaded:'9/18/2023'
      },
      {
        published:true,
        thumbnail:'https://images.pexels.com/photos/2519812/pexels-photo-2519812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Getting Started with Express.js',
        likes:906,
        dislikes:14,
        dateUploaded:'9/16/2023'
      },
    ]
  }

  togglePublish(event:Event, id:number){
    // Prevent the default behavior of the checkbox
    /* 
    If you use (click) without event.preventDefault(), your custom logic in the toggle method might execute after the default behavior, 
    leading to unexpected behavior. For example, the checkbox could change its state, and then your toggle method could run, 
    resulting in a toggle that doesn't match the underlying data.
    */
    event.preventDefault();
    this.data[id].published = !this.data[id].published
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

  uploadVideoStatusDialog(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.panelClass = 'upload-status-dialog-modal'
    this.dialog.open(VideoUploadStatusModalComponent, dialogConfig)
  }

  deleteVideoDialog(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.panelClass = 'delete-video-dialog-modal'
    this.dialog.open(DeleteVideoModalComponent, dialogConfig)
  }

  editVideoDialog(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.panelClass = 'edit-video-dialog-modal'
    this.dialog.open(EditVideoModalComponent, dialogConfig)
  }

}
