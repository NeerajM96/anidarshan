import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DeviceDetectorService } from '../services/device-detector.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  username:string = ''
  deviceIsMobile:boolean = false
  isAuthenticated:boolean = false
  constructor(
    private authService: AuthService, 
    private deviceDetectorService:DeviceDetectorService,
    // private dialogRef: MatDialogRef<SidebarComponent> 
    ){
  }
  ngOnInit(): void {
    this.deviceIsMobile = this.deviceDetectorService.isMobile()
    this.username = this.authService.getAuthData().username || ''
    this.isAuthenticated = this.authService.isAuthenticated()
  }

  onClose(){
    // // getting some error due to injecting Matdialogref/dialogref
    // this.dialogRef.close()
  }
}
