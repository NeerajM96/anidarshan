import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss'],
})
export class CommentCardComponent implements OnInit{
  @Input()
  data: any;

  content: string = '';
  channelIcon: string = '';
  username: string = '';
  fullName: string = '';
  updatedAt: string = '';

  ngOnInit(): void {
    this.content = this.data.content
    this.channelIcon = this.data.channelIcon
    this.username = this.data.username
    this.fullName = this.data.fullName
    this.updatedAt = this.data.updatedAt
  }
}
