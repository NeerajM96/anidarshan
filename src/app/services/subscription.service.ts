import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Subscribers{
  data:[
    {
      _id:string,
      subscribers:{
        fullName:string,
        avatar:string,
        subscribersCount:number,
        isSubscribed:boolean
      }
    }
  ]
}

interface Subscribed{
  data:[
    {
      _id:string,
      subscribers:{
        fullName:string,
        avatar:string,
        _id:string
      }
    }
  ]
}

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private apiUrl = 'http://localhost:8000/api/v1/subscriptions/';
  constructor(private http:HttpClient) { }

  toggleChannelSubscription(channelId:string){
    const endPoint = this.apiUrl + `c/${channelId}`
    return this.http.post(endPoint,{})
  }

  getUserChannelSubscribers(channelId:string){
    const endPoint = this.apiUrl + `c/${channelId}`
    return this.http.get<Subscribers>(endPoint,{})
  }

  getSubscribedChannels(subscriberId:string){
    const endPoint = this.apiUrl + `u/${subscriberId}`
    return this.http.get<Subscribed>(endPoint,{})
  }
}
