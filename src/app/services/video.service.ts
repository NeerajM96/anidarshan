import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'http://localhost:8000/api/v1/videos/';
  constructor(private http:HttpClient) { }

  getVideoById(id:string){
    const endpoint = this.apiUrl + id
    return this.http.get<any>(endpoint)
  }

  uploadAVideo(videoFile:File, thumbnail:File,title:string, description:string){
    const enpoint = this.apiUrl
    const videoData = new FormData()
    videoData.append("videoFile", videoFile, videoFile.name)
    videoData.append("thumbnail", thumbnail, thumbnail.name)
    videoData.append("title",title)
    videoData.append("description",description)
    return this.http.post<any>(enpoint, videoData)
  }
}
