import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  constructor(private accountService: AccountService){

  }
  ngOnInit(): void {
    // this.accountService.getCurrentUser().subscribe(res => {
    //   console.log("Current user: ", res)
    // })
  }
}
