import { Component, HostListener, OnInit } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';
import { DataStoreService } from '../services/data-store.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-video-player-dashboard',
  templateUrl: './video-player-dashboard.component.html',
  styleUrls: ['./video-player-dashboard.component.scss']
})
export class VideoPlayerDashboardComponent implements OnInit{
  preload: string = 'auto';
  api: VgApiService = new VgApiService;
  paused:boolean = false;
  url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  urlForm = new FormControl()


    constructor(private dataStore:DataStoreService) {
      dataStore.showSideBar.next(false)
    }
    
    ngOnInit(): void {
      
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
  
  setUrl(){
    this.url = this.urlForm.value
  }
}
