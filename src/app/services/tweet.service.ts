import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface UserTweet {
  data: [
    {
      title: string;
      createdAt: Date;
      content: string;
      likes: number;
      dislikes: number;
    }
  ];
}

interface CreateTweetAPI {
  data: {
    title: string;
    createdAt: Date;
    content: string;
    likes: number;
    dislikes: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class TweetService {
  // private apiUrl = 'http://localhost:8000/api/v1/tweets/';
  private apiUrl = environment.url +"tweets/"
  constructor(private http: HttpClient) {}

  getUserTweets(username: string) {
    const endPoint = this.apiUrl + `user/${username}`;
    return this.http.get<UserTweet>(endPoint);
  }

  createTweet(tweetContent: string) {
    const endPoint = this.apiUrl + `create-tweet`;
    const body = { content: tweetContent };
    return this.http.post<CreateTweetAPI>(endPoint, body);
  }

  deleteTweetById(id:string){
    const endPoint = this.apiUrl + id
    return this.http.delete<any>(endPoint)
  }
}
