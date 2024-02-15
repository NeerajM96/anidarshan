import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit{
  thumbnail:string = ''
  duration:number = 0
  channelIcon:string = ''
  title:string = ''
  viewCount:string = ''
  uploadedAt:string = ''
  channelName:string = ''
  description:string = ''
  videoFile:string = ''
  videoId:string = ''

  @Input()
  data:any

  @Input()
  viewMode = 'grid'

  @Input()
  onMyChannelPage = false

  @Input()
  videoDetailsPage:boolean = false

  @Output() reloadWatchCompEvent = new EventEmitter<string>()

  constructor(private router:Router, private route:ActivatedRoute){

  }

  // onMyChannelPage:boolean = true  // hides channel name and icon when I am on my page.
  ngOnInit(): void {
    this.thumbnail = this.data.thumbnail
    this.duration = Math.round(this.data.duration)
    this.channelIcon = this.data.avatar
    this.title = this.data.title
    // this.viewCount = this.data.views
    this.viewCount = 500 + 'K'
    this.uploadedAt = this.data.createdAt
    this.channelName = this.data.fullName
    this.description = this.data.description
    this.videoFile = this.data.videoFile
    this.videoId = this.data._id
  }

  watchVideo(){
    const currentComponent = this.route.snapshot.component?.name
    if(currentComponent === 'VideoPlayerDashboardComponent'){
      this.reloadWatchCompEvent.emit(this.videoId)
    }
    this.router.navigate(['watch',this.videoId])
  }

}
