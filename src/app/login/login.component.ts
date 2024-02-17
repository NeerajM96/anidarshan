import { Component, HostListener, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';
import { User } from '../models/user/user.model';

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
  }
  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      const username = this.authService.getAuthData().username
      this.router.navigate(['/c',username]);
    }
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
      const routingURL = `/c/${data.username}`;
      this.router.navigate([routingURL]);
      this.isLoading = false;
    });
  }

  routeToHome(){
    this.router.navigate(['/home'])
  }
}
