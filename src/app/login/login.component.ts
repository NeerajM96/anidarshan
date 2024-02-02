import { Component, HostListener, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';
import { User } from '../models/user/user.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoginMode: boolean = false;
  isLoading: boolean = false;

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private dataStore: DataStoreService
  ) {
    dataStore.showHeader.next(false);
    dataStore.showSideBar.next(false);
  }
  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      const username = this.authService.getAuthData().username
      this.router.navigate(['/c',username]);
      this.dataStore.showHeader.next(true);
      this.dataStore.showSideBar.next(true);
    }
  }

  // to fix bug when we pressed back button in browser and header and side-bar are still hidden
  @HostListener('window:popstate', ['$event'])
  onPopState(event: Event) {
    console.log('Back button pressed');
    this.dataStore.showHeader.next(true);
    this.dataStore.showSideBar.next(true);
  }

  handelAuthentication(
    id: string,
    username: string,
    fullName: string,
    avatar: string,
    coverImage: string,
    watchHistory: any,
    accessToken: string
  ) {
    const incomingUser = new User(
      id,
      username,
      fullName,
      avatar,
      coverImage,
      watchHistory,
      accessToken
    );
    this.dataStore.user.next(incomingUser);
  }

  loginUser() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.isLoading = true;
    this.authService.login(email!, password!).subscribe((res) => {
      const data = res.data.user;

      this.handelAuthentication(
        data._id,
        data.username,
        data.fullName,
        data.avatar,
        data.coverImage,
        data.watchHistory,
        res.data.accessToken
      );
      this.dataStore.showHeader.next(true);
      this.dataStore.showSideBar.next(true);
      const routingURL = `/c/${data.username}`;
      this.router.navigate([routingURL]);
    });
  }
}
