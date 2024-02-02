import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-subscribers',
  templateUrl: './my-subscribers.component.html',
  styleUrls: ['./my-subscribers.component.scss']
})
export class MySubscribersComponent implements OnInit{
  userId:string=''

  constructor(private authService:AuthService){

  }


  ngOnInit(): void {
    this.userId = this.authService.getUserId()
  }

}
