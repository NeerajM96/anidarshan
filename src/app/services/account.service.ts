import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  apiUrl = "http://localhost:8000/api/v1/users/current-user"

  getCurrentUser(){
    return this.http.get(this.apiUrl)
  }
}
