import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit{
  thumbnail:string = ''
  duration:string = ''
  channelIcon:string = ''
  title:string = ''
  viewCount:string = ''
  uploadedAt:string = ''
  channelName:string = ''

  @Input()
  data:any

  @Input()
  onMyChannelPage = false
  // onMyChannelPage:boolean = true  // hides channel name and icon when I am on my page.
  ngOnInit(): void {
    this.thumbnail = this.data.thumbnail
    this.duration = this.data.duration
    this.channelIcon = this.data.channelIcon
    this.title = this.data.title
    this.viewCount = this.data.viewCount
    this.uploadedAt = this.data.uploadedAt
    this.channelName = this.data.channelName
  }

}
