import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface HealthCheckAPI{
  data:{
    message:string,
    statusCode:number,
    success:boolean
  }
}

@Injectable({
  providedIn: 'root'
})
export class HealthCheckService {

  constructor(private http: HttpClient) { }

  healthCheck(){
    const apiUrl = environment.url + "healthcheck/"
    return this.http.get<HealthCheckAPI>(apiUrl)
  }
}
