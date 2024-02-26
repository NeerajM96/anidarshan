import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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
  private apiUrl = environment.url +"subscriptions/"
  constructor(private http:HttpClient) { }

  toggleChannelSubscription(channelId:string){
    const endPoint = this.apiUrl + `c/${channelId}`
    return this.http.post(endPoint,{})
  }

  getUserChannelSubscribers(channelId:string){
    const endPoint = this.apiUrl + `c/${channelId}`
    return this.http.get<Subscribers>(endPoint,{})
  }
  
  getSubscribedChannels(subscriberId:string, fullName?:string){
    let endPoint = this.apiUrl + `u/${subscriberId}`
    if(fullName){
      endPoint += `?fullName=${fullName}`
    }
    return this.http.get<Subscribed>(endPoint,{})
  }
}
