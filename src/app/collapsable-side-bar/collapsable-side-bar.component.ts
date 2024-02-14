import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-collapsable-side-bar',
  templateUrl: './collapsable-side-bar.component.html',
  styleUrls: ['./collapsable-side-bar.component.scss']
})
export class CollapsableSideBarComponent {
  username:string = ''
  deviceIsMobile:boolean = false
  constructor(
    private authService: AuthService, 
    private dialogRef: MatDialogRef<CollapsableSideBarComponent> 
    ){
  }
  ngOnInit(): void {
    this.username = this.authService.getAuthData().username || ''
  }

  onClose(){
    this.dialogRef.close()
  }
}
