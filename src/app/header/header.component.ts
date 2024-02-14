import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';
import { DeviceDetectorService } from '../services/device-detector.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  avatar:string = ''
  isLoggedIn = false;
  deviceIsMobile:boolean = false
  private authListenerSub: Subscription | undefined;

  constructor(private authService: AuthService, private router: Router, 
    private dataStore:DataStoreService,
    private deviceDetectorService:DeviceDetectorService,
    private dialog:MatDialog
    ) {}

  ngOnInit(): void {
    this.deviceIsMobile = this.deviceDetectorService.isMobile()
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

  openSideBar(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.panelClass = "collapsable-side-bar-model"
    this.dialog.open(SidebarComponent, dialogConfig)
  }
}
