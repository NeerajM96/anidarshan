import { Component, HostListener, OnInit } from '@angular/core';
import { BitrateOptions, VgApiService } from '@videogular/ngx-videogular/core';
import { DataStoreService } from '../services/data-store.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from '../services/video.service';
import { DeviceDetectorService } from '../services/device-detector.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CommentsComponent } from '../comments/comments.component';
import { CollapsableCommentsComponent } from '../collapsable-comments/collapsable-comments.component';

@Component({
  selector: 'app-video-player-dashboard',
  templateUrl: './video-player-dashboard.component.html',
  styleUrls: ['./video-player-dashboard.component.scss']
})
export class VideoPlayerDashboardComponent implements OnInit{
  preload: string = 'auto';
  api: VgApiService = new VgApiService;
  paused:boolean = false;
  
  videoUrl = ""
  thumbnail = ""
  hlsBitrates: BitrateOptions[] = [];
  videoId = ''
  title:string = ''
  channelName:string = ''
  channelIcon:string = ''
  description:string = ''
  createdAt:string = ''
  viewCount:number = 0
  likes:number = 3050
  dislikes:number = 20
  subscribers:number = 0
  isSubscribed:boolean = false
  deviceIsMobile:boolean = false
  secureUrl:string = ''
  
  urlForm = new FormControl()
 

    constructor(private dataStore:DataStoreService, private route:ActivatedRoute, 
      private videoService:VideoService,
      private deviceDetectorService:DeviceDetectorService,
      private dialog:MatDialog,
      private router:Router
      ) {
      dataStore.showSideBar.next(false)
    }
    
    ngOnInit(): void {
      // TODO: Not able reload route if clicked on video card on watch component
      this.router.routeReuseStrategy.shouldReuseRoute = () => { return false; };
      
      this.deviceIsMobile = this.deviceDetectorService.isMobile()
      this.videoId = this.route.snapshot.paramMap.get("videoId") || ''
      this.videoService.getVideoById(this.videoId).subscribe(res => {
        this.channelIcon = res.data.avatar
        this.title = res.data.title
        this.description = res.data.description
        this.channelName = res.data.fullName
        this.viewCount = res.data.views
        this.createdAt = res.data.createdAt
        this.subscribers = res.data.subscribersCount
        this.videoUrl = res.data.videoFile
        this.thumbnail = res.data.thumbnail
        this.secureUrl = res.data.secureUrl
        // // add aggregation in BE to get below
        // this.likes = res.data.likes
        // this.dislikes = res.data.dislikes
        // this.isSubscribed = res.data.isSubscribed
      })
    }

    onPlayerReady(api: VgApiService) {
      this.api = api;
      this.api.getDefaultMedia().subscriptions.ended.subscribe(
          () => {
              // Set the video to the beginning
              this.api.getDefaultMedia().currentTime = 0;
              this.api.play()
              this.paused = false
          }
      );
  }

  // only triggers for video player, if used for others also, then seperate "if(!thi.api)" to individual methods 
  // used in switch statements
  @HostListener('document:keydown',['$event'])
  handleKeyboardEvent(event:KeyboardEvent){

    if(!this.api){
      return
    }

    // Check if the event target is not an input field or a textarea
    if ((event.target instanceof HTMLInputElement) || (event.target instanceof HTMLTextAreaElement)){
      return
    }
    const key = event.code
    switch (key) {
      case "ArrowRight":
        this.seekToTime(5)
        break;
      case "ArrowLeft":
        this.seekToTime(-5)
        break
      case "ArrowUp":
        // increases volume by 10%
        this.adjustVolume(0.1)
        break
      case "ArrowDown":
        // decreases volume by 10%
        this.adjustVolume(-0.1)
        break
      case "Space":
        this.togglePlayPause()
        break
      default:
        break;
    }
  }

  // seek forward or backwards based on seconds positive or negative
  seekToTime(seconds:number){
    const currentTime = this.api.currentTime 
    this.api.seekTime(currentTime + seconds)
  }

  adjustVolume(delta:number){
    const currentVolume = this.api.volume
    let newVolume = currentVolume + delta

    // Ensure volume is within the valid range (0 to 1)
    newVolume = Math.max(0, Math.min(1, newVolume));
    this.api.volume = newVolume
  }

  togglePlayPause(){
    if(!this.paused){
      this.api.play()
    }
    else{
      this.api.pause()
    }
    this.paused = !this.paused
  }

  show = false
  toggle(){
    this.show = !this.show
  }
  
  handleGetBitrates(event: any) {
    this.hlsBitrates = event;
  }

  onSubscribe(){
  }
  
  openComments(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.panelClass = 'mobile-device-comments-modal'
    dialogConfig.position = {
      top:'60%'
    }
    this.dialog.open(CollapsableCommentsComponent, dialogConfig)
  }

  reload(id:string){
    this.reloadWatchComponentWithId(id)
  }
  // helps is reloading current route by setting {onSameUrlNavigation: 'reload'} inside app.routing.module
  reloadWatchComponentWithId(id: string) {
    // Navigate to the same route ('watch/:id') with the desired video ID
    this.router.navigate(['/watch', id], { queryParamsHandling: 'merge' });
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
}
