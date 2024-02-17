import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DataStoreService } from './services/data-store.service';
import { AuthService } from './services/auth.service';
import { DeviceDetectorService } from './services/device-detector.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'anidarshan';
  isLoggedIn = false
  showSidebar = true
  showHeader = true
  deviceIsMobile:boolean = false
  private routerEventsSubscription:Subscription;

  constructor(private router: Router, 
    public dataStore: DataStoreService,
    private authService:AuthService,
    private deviceDetectorService:DeviceDetectorService
    ){
    this.routerEventsSubscription = router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.showSidebar = this.shouldShowSidebar()
        this.showHeader = this.shouldShowHeader()
      }
    })
  }

  // TODO: temporarily increased "maximumWarning": "1.5mb" from 500kb and "maximumError": "2.5mb" from 1mb, implement lazy loady 
  // and reset these
  ngOnInit(): void {
    this.deviceIsMobile = this.deviceDetectorService.isMobile()
    this.authService.refreshAccessToken().subscribe(res=>{
      localStorage.setItem("accessToken",res.data.accessToken)
    })

    this.authService.isAuthenticated()
  }

  shouldShowSidebar(): boolean {
    // Determine if the sidebar should be shown based on the current route
    const currentRoute = this.router.routerState.snapshot.url;
    if (currentRoute.startsWith('/watch/')){
      return false
    }
    return !['/login', '/register','/admin/dashboard',].includes(currentRoute); // Example routes where sidebar should be hidden
  }
  shouldShowHeader(): boolean {
    const currentRoute = this.router.routerState.snapshot.url;
    return !['/login', '/register'].includes(currentRoute);
  }

  ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe()
  }
  
}
