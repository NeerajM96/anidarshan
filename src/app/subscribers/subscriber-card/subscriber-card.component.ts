import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriber-card',
  templateUrl: './subscriber-card.component.html',
  styleUrls: ['./subscriber-card.component.scss']
})
export class SubscriberCardComponent implements OnInit{
    
    @Input()
    subscriberData:any

    channelIcon:string = ''
    channelName:string = ''
    isSubscribed:boolean = false
    subscribersCount:number = 0

    ngOnInit(): void {
      this.channelIcon = this.subscriberData.subscribers.avatar
      this.channelName = this.subscriberData.subscribers.fullName
      this.isSubscribed = this.subscriberData.subscribers.isSubscribed
      this.subscribersCount = this.subscriberData.subscribers.subscribersCount
      
    }
}
