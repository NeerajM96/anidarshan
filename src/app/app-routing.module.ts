import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyChannelComponent } from './my-channel/my-channel.component';
import { SignupComponent } from './signup/signup.component';
import { MySubscribersComponent } from './my-subscribers/my-subscribers.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch: "full"},
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"c/:username", component:MyChannelComponent},
  {path:"signup", component:SignupComponent},
  {path:"my-subscribers", component:MySubscribersComponent},
  {path:"admin/dashboard", component:AdminDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
