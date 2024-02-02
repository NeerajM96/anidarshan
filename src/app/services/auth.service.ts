import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { User } from '../models/user/user.model';

interface ApiResponse {
  statusCode: number;
  data: {
    user: {
      _id: string;
      username: string;
      email: string;
      fullName: string;
      avatar: string;
      coverImage: string;
      watchHistory: any[];
    };
    accessToken: string;
    refreshToken: string;
  };
  message: string;
  success: boolean;
}

interface LogoutApiResponse {
  data: {};
  statusCode: number;
  message: string;
  success: boolean;
}

interface ChannelInfo{
  data: {
    _id: string;
      username: string;
      email: string;
      fullName: string;
      avatar: string;
      coverImage: string;
      subscribersCount:number;
      isSubscribed:boolean;
      channelsSubscribedToCount:number
  }
  message:string;
  statusCode:number;
  success:boolean
}

interface AuthData{
  accessToken:string;
  userId:string;
  username:string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api/v1/users/';
  private accessToken = '';
  private username = '';
  private userId ='';
  private authStatusListner = new BehaviorSubject(false);
  private userState = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) {}

  getAccessToken() {
    return this.accessToken;
  }

  getUserId(){
    const authData = this.getAuthData()
    if (authData && authData.userId){
      this.userId = authData.userId
    }
    return this.userId
  }

  getUsername(){
    return this.username
  }

  getUserAvatar(){
    const avatar = localStorage.getItem("avatar")
    return avatar
  }
  getAuthData(){
    const data = {
      username:localStorage.getItem("username"),
      userId:localStorage.getItem("userId"),
      accessToken:localStorage.getItem("accessToken"),
    }

    // Handle the case where localStorage.getItem returns null
  if (data.username === null || data.userId === null || data.accessToken === null) {
    // Optionally, you may want to handle this case differently based on your requirements.
    // You can log a warning, set default values, or take other appropriate actions.
    console.warn('Some auth data is missing in localStorage.');
  }

    return data
  }

  getAuthStatusListner() {
    // returning as observalbe makes sure that we will only emit value from this service but still be able to listen in other components.
    return this.authStatusListner.asObservable();
  }

  register(
    fullName: string,
    username: string,
    email: string,
    password: string,
    avatar: File,
    coverImage: File
  ) {
    const endPoint = this.apiUrl + 'register';
    const registerData = new FormData();
    registerData.append('fullName', fullName);
    registerData.append('username', username);
    registerData.append('email', email);
    registerData.append('password', password);
    registerData.append('avatar', avatar,'avatar');
    registerData.append('coverImage', coverImage, 'coverImage');
    
    return this.http.post(endPoint, registerData);
  }

  login(email: string, password: string): Observable<ApiResponse> {
    const body = {
      email,
      password,
    };
    const endPoint = this.apiUrl + 'login';
    return this.http.post<ApiResponse>(endPoint, body).pipe(
      tap((res) => {
        this.accessToken = res.data.accessToken;
        const user = new User(
          res.data.user._id,
          res.data.user.username,
          res.data.user.fullName,
          res.data.user.avatar,
          res.data.user.coverImage,
          res.data.user.watchHistory,
          res.data.accessToken
        );
        this.userState.next(user);
        this.authStatusListner.next(true);
        this.saveAuthToLocalStorage(res.data.user.username,res.data.user._id,res.data.accessToken,res.data.user.avatar)
      })
    );
  }

  logout() {
    const endPoint = this.apiUrl + '/logout';
    const user = {
      _id: '659e6b8c04170c08ee0b874f',
    };
    this.authStatusListner.next(false);
          this.clearAuthLocalStorage()
    return this.http.post<LogoutApiResponse>(endPoint, user).pipe(
      tap((res) => {
        if (res.statusCode == 200) {
          // this.authStatusListner.next(false);
          // this.clearAuthLocalStorage()
        }
      })
    );
  }

  getUserState() {
    return this.userState.asObservable();
  }

  getChannelInfo(username:string){
    const endPoint = this.apiUrl + `c/${username}`
    return this.http.get<ChannelInfo>(endPoint)
  }

  saveAuthToLocalStorage(username:string, userId:string,accessToken:string,avatar:string){
    localStorage.setItem("accessToken",accessToken)
    localStorage.setItem("username",username)
    localStorage.setItem("userId",userId)
    localStorage.setItem("avatar",avatar)
  }

  clearAuthLocalStorage(){
    localStorage.clear()
  }

  isAuthenticated(){
    const data = this.getAuthData()
    if (data.username && data.userId && data.accessToken){
      this.authStatusListner.next(true)
      return true
    }
    return false
  }

}
