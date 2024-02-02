import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  avatar:string = ''
  isLoggedIn = false;
  private authListenerSub: Subscription | undefined;

  constructor(private authService: AuthService, private router: Router, private dataStore:DataStoreService) {}

  ngOnInit(): void {
    this.authListenerSub = this.authService
      .getAuthStatusListner()
      .subscribe((isAuthenticated) => {
        this.isLoggedIn = isAuthenticated;
      });
      this.avatar = this.authService.getUserAvatar()!
  }
  ngOnDestroy(): void {
    this.authListenerSub?.unsubscribe();
  }

  logoutUser() {
    this.authService.logout().subscribe((res) => {
      if (res.statusCode == 200) {
        this.routeToHome()
      }
    });
  }

  routeToHome(){
    this.router.navigate(['/home'])
    this.dataStore.showSideBar.next(true)
  }
}
