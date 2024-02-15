import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VideoService } from '../services/video.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit{

  videoData:any;
  username:string = ''
  @Output() reloadWatchCompEvent = new EventEmitter<string>()
  constructor(private videoService:VideoService, private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.username =  this.route.snapshot.paramMap.get('username') || ''
    this.videoService.getAllVideos(this.username).subscribe(res => {
      this.videoData = res.data
    })
  }
    @Input()
    viewMode = 'grid'

    @Input()
    videoDetailsPage:boolean = false

      @Input()
      toMyChannelPage = false


    reloadWatchComp(videoId:string){
      this.reloadWatchCompEvent.emit(videoId)
    }
}
