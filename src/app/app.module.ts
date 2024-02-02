import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccountComponent } from './account/account.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './shared/loader/loader.component';
import { MyChannelComponent } from './my-channel/my-channel.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { SignupComponent } from './signup/signup.component';
import { VideoCardComponent } from './videos/video-card/video-card.component';
import { VideosComponent } from './videos/videos.component';
import { TweetsComponent } from './tweets/tweets.component';
import { TweetCardComponent } from './tweets/tweet-card/tweet-card.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { SubscriberCardComponent } from './subscribers/subscriber-card/subscriber-card.component';
import { MySubscribersComponent } from './my-subscribers/my-subscribers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import { UploadVideoModalComponent } from './shared/upload-video-modal/upload-video-modal.component';
import { VideoUploadStatusModalComponent } from './shared/video-upload-status-modal/video-upload-status-modal.component';
import { DeleteVideoModalComponent } from './shared/delete-video-modal/delete-video-modal.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EditVideoModalComponent } from './shared/edit-video-modal/edit-video-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountComponent,
    SidebarComponent,
    HomeComponent,
    LoginComponent,
    LoaderComponent,
    MyChannelComponent,
    SignupComponent,
    VideoCardComponent,
    VideosComponent,
    TweetsComponent,
    TweetCardComponent,
    TimeAgoPipe,
    SubscribersComponent,
    SubscriberCardComponent,
    MySubscribersComponent,
    UploadVideoModalComponent,
    VideoUploadStatusModalComponent,
    DeleteVideoModalComponent,
    AdminDashboardComponent,
    EditVideoModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatMenuModule,
    MatSnackBarModule
  ],
  // multi:true means, since we can have multiple interceptors in the app, so don't overwrite exisiting interceptors 
  // and add it as an additional one instead and the internals will be handled by HttpClient
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
