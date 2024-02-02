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
  ngOnInit(): void {
    this.authService.isAuthenticated()

    this.dataStore.showHeader.subscribe(res=>{
      this.showHeader = res
    })
    this.dataStore.showSideBar.subscribe(res=>{
      this.showSidebar = res
    })
  }
  
}
