import { Component, Input, OnInit } from '@angular/core';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent implements OnInit {
  
  @Input()
  userId:string = ''
  @Input()
  hideSearchBar:boolean = false
  
  @Input()
  flag:string = 'subscribers'

  // subscribers:any
  // subscribed:any
  data:any

  constructor(private subscriptionService:SubscriptionService){

  }

  ngOnInit(): void {
    this.setData()
  }

  setData(){
    if(this.flag === 'subscribers'){
      this.setSubscribers()
    }
    else{
      this.setSubscribedChannels()
    }
  }

  setSubscribers(){
    this.subscriptionService.getUserChannelSubscribers(this.userId).subscribe(res => {
      this.data = res.data
      
    })
  }

  setSubscribedChannels(){
    this.subscriptionService.getSubscribedChannels(this.userId).subscribe(res => {
      this.data = res.data
    })
  }

}
