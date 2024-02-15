import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyChannelComponent } from './my-channel/my-channel.component';
import { SignupComponent } from './signup/signup.component';
import { MySubscribersComponent } from './my-subscribers/my-subscribers.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { VideoPlayerDashboardComponent } from './video-player-dashboard/video-player-dashboard.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch: "full"},
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"c/:username", component:MyChannelComponent},
  {path:"signup", component:SignupComponent},
  {path:"my-subscribers", component:MySubscribersComponent, canActivate:[AuthGuard]},
  {path:"admin/dashboard", component:AdminDashboardComponent, canActivate:[AuthGuard]},
  {path:"watch/:videoId", component:VideoPlayerDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
