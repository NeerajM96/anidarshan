import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'http://localhost:8000/api/v1/videos/';
  constructor(private http:HttpClient) { }

  getVideoById(id:string){
    
  }
}
