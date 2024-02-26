import { Component, Input, OnInit } from '@angular/core';
import { SubscriptionService } from '../services/subscription.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

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
  userToSearch = new FormControl('');


  constructor(private subscriptionService:SubscriptionService){

  }

  ngOnInit(): void {
    this.setData()
    this.userToSearch.valueChanges.pipe(debounceTime(400))
    .subscribe(res => {
      this.setSubscribedChannels(res!)
    })
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

  setSubscribedChannels(fullName?:string){
    this.subscriptionService.getSubscribedChannels(this.userId,fullName).subscribe(res => {
      this.data = res.data
    })
  }

}
