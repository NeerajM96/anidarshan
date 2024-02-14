import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStoreService } from './services/data-store.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'anidarshan';
  isLoggedIn = false
  showSidebar = true
  showHeader = true
  
  constructor(private route: ActivatedRoute, public dataStore: DataStoreService,private authService:AuthService){
    
  }
  // TODO: temporarily increased "maximumWarning": "1.5mb" from 500kb and "maximumError": "2.5mb" from 1mb, implement lazy loady 
  // and reset these
  ngOnInit(): void {
    this.authService.refreshAccessToken().subscribe(res=>{
      localStorage.setItem("accessToken",res.data.accessToken)
    })

    this.authService.isAuthenticated()

    this.dataStore.showHeader.subscribe(res=>{
      this.showHeader = res
    })
    this.dataStore.showSideBar.subscribe(res=>{
      this.showSidebar = res
    })
  }
  
}
