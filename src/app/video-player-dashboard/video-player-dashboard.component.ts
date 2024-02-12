import { Component, HostListener, OnInit } from '@angular/core';
import { BitrateOptions, VgApiService } from '@videogular/ngx-videogular/core';
import { DataStoreService } from '../services/data-store.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video-player-dashboard',
  templateUrl: './video-player-dashboard.component.html',
  styleUrls: ['./video-player-dashboard.component.scss']
})
export class VideoPlayerDashboardComponent implements OnInit{
  preload: string = 'auto';
  api: VgApiService = new VgApiService;
  paused:boolean = false;
  
  url = "https://res.cloudinary.com/dqvwtmjbb/video/upload/sp_auto/v1707761100/ppqfhcn5znvvjof29xp6.m3u8"
  hlsBitrates: BitrateOptions[] = [];
  videoId = ''

  
  urlForm = new FormControl()
  data = {
    title:'Advanced React Patterns',
    channelName:'React Patterns',
    channelIcon:"https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    viewCount:30164,
    uploadedAt:'2024-01-19T10:19:02.743+00:00',
    likes:3050,
    dislikes:20,
    subscribers:75432,
    isSubscribed:false,
    description:`🚀 Dive into the world of React with our latest tutorial series: "Advanced React Patterns"! 🛠️ Whether you're a seasoned developer or 
    just starting out, this series is designed to elevate your React skills to the next level.`
  }

    constructor(private dataStore:DataStoreService, private route:ActivatedRoute, private videoService:VideoService) {
      dataStore.showSideBar.next(false)
    }
    
    ngOnInit(): void {
      this.videoId = this.route.snapshot.paramMap.get("videoId") || ''
      this.videoService.getVideoById(this.videoId).subscribe(res => {
        console.log("Video details: ", res)
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
}
