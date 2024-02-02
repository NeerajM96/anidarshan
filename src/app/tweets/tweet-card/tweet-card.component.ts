import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss']
})
export class TweetCardComponent implements OnInit{
  
  @Input()
  channelIcon:string = ''
  @Input()
  channelName:string = ''
  @Input()
  data:any

  tweetedAt:string = ''
  content:string = ''
  likes:number = 0
  dislikes:number = 0

  ngOnInit(): void {
    this.tweetedAt = this.data.createdAt
    this.content = this.data.content
    this.likes = this.data.likes
    this.dislikes = this.data.dislikes
  }

}
