import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {


      @Input()
      toMyChannelPage = false


      @Input()
      videoData = [
        {
          thumbnail: 'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '20:45',
    channelIcon: 'http://res.cloudinary.com/dqvwtmjbb/image/upload/v1705576838/o2sid2hwlsqq7mjmajob.jpg',
    title: 'JavaScript Fundamentals: Variables and Data Types',
    viewCount:'10.3k',
    uploadedAt:'40 minutes ago',
    channelName:'Chai Aur Code'
        },
        {
          thumbnail: 'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '20:45',
    channelIcon: 'http://res.cloudinary.com/dqvwtmjbb/image/upload/v1705576838/o2sid2hwlsqq7mjmajob.jpg',
    title: 'JavaScript Fundamentals: Variables and Data Types',
    viewCount:'10.3k',
    uploadedAt:'40 minutes ago',
    channelName:'Chai Aur Code'
        },
        {
          thumbnail: 'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '20:45',
    channelIcon: 'http://res.cloudinary.com/dqvwtmjbb/image/upload/v1705576838/o2sid2hwlsqq7mjmajob.jpg',
    title: 'JavaScript Fundamentals: Variables and Data Types',
    viewCount:'10.3k',
    uploadedAt:'40 minutes ago',
    channelName:'Chai Aur Code'
        },
        {
          thumbnail: 'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '20:45',
    channelIcon: 'http://res.cloudinary.com/dqvwtmjbb/image/upload/v1705576838/o2sid2hwlsqq7mjmajob.jpg',
    title: 'JavaScript Fundamentals: Variables and Data Types',
    viewCount:'10.3k',
    uploadedAt:'40 minutes ago',
    channelName:'Chai Aur Code'
        },
        {
          thumbnail: 'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '20:45',
    channelIcon: 'http://res.cloudinary.com/dqvwtmjbb/image/upload/v1705576838/o2sid2hwlsqq7mjmajob.jpg',
    title: 'JavaScript Fundamentals: Variables and Data Types',
    viewCount:'10.3k',
    uploadedAt:'40 minutes ago',
    channelName:'Chai Aur Code'
        },
        {
          thumbnail: 'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '20:45',
    channelIcon: 'http://res.cloudinary.com/dqvwtmjbb/image/upload/v1705576838/o2sid2hwlsqq7mjmajob.jpg',
    title: 'JavaScript Fundamentals: Variables and Data Types',
    viewCount:'10.3k',
    uploadedAt:'40 minutes ago',
    channelName:'Chai Aur Code'
        },
        {
          thumbnail: 'https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '20:45',
    channelIcon: 'http://res.cloudinary.com/dqvwtmjbb/image/upload/v1705576838/o2sid2hwlsqq7mjmajob.jpg',
    title: 'JavaScript Fundamentals: Variables and Data Types',
    viewCount:'10.3k',
    uploadedAt:'40 minutes ago',
    channelName:'Chai Aur Code'
        },
      ]
}
