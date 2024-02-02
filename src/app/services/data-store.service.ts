import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  isAuthenticated = new BehaviorSubject(false)
  currentUrl = new BehaviorSubject("")
  showSideBar = new BehaviorSubject(true)
  showHeader = new BehaviorSubject(true)
  user = new Subject<User>()
  constructor() { }

}
