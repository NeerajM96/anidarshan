import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = environment.url + "videos/"
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
