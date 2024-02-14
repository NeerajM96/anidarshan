import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-collapsable-comments',
  templateUrl: './collapsable-comments.component.html',
  styleUrls: ['./collapsable-comments.component.scss']
})
export class CollapsableCommentsComponent {
  addComment = new FormControl('', Validators.required)
  deviceIsMobile:boolean = false
  commentsData = [
    {
      content:"This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
      channelIcon:"https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-woman-reading-book-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username:"sarahjv",
      fullName:"Sarah Johnson",
      updatedAt:"2024-02-12T06:50:30.579+00:00"
    },
    {
      content:"Render props have always been a bit tricky for me. Can't wait to see how this series breaks it down. Thanks for sharing!",
      channelIcon:"https://images.pexels.com/photos/18107025/pexels-photo-18107025/free-photo-of-man-reading-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username:"mikerod",
      fullName:"Michael Rodriguez",
      updatedAt:"2024-01-27T10:34:29.851+00:00"
    },
    {
      content:"This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
      channelIcon:"https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-woman-reading-book-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username:"sarahjv",
      fullName:"Sarah Johnson",
      updatedAt:"2024-02-12T06:50:30.579+00:00"
    },
    {
      content:"Render props have always been a bit tricky for me. Can't wait to see how this series breaks it down. Thanks for sharing!",
      channelIcon:"https://images.pexels.com/photos/18107025/pexels-photo-18107025/free-photo-of-man-reading-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username:"mikerod",
      fullName:"Michael Rodriguez",
      updatedAt:"2024-01-27T10:34:29.851+00:00"
    },
    {
      content:"This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
      channelIcon:"https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-woman-reading-book-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username:"sarahjv",
      fullName:"Sarah Johnson",
      updatedAt:"2024-02-12T06:50:30.579+00:00"
    },
    {
      content:"Render props have always been a bit tricky for me. Can't wait to see how this series breaks it down. Thanks for sharing!",
      channelIcon:"https://images.pexels.com/photos/18107025/pexels-photo-18107025/free-photo-of-man-reading-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username:"mikerod",
      fullName:"Michael Rodriguez",
      updatedAt:"2024-01-27T10:34:29.851+00:00"
    },
    {
      content:"This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
      channelIcon:"https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-woman-reading-book-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username:"sarahjv",
      fullName:"Sarah Johnson",
      updatedAt:"2024-02-12T06:50:30.579+00:00"
    },
    {
      content:"Render props have always been a bit tricky for me. Can't wait to see how this series breaks it down. Thanks for sharing!",
      channelIcon:"https://images.pexels.com/photos/18107025/pexels-photo-18107025/free-photo-of-man-reading-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username:"mikerod",
      fullName:"Michael Rodriguez",
      updatedAt:"2024-01-27T10:34:29.851+00:00"
    },
    {
      content:"This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
      channelIcon:"https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-woman-reading-book-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username:"sarahjv",
      fullName:"Sarah Johnson",
      updatedAt:"2024-02-12T06:50:30.579+00:00"
    },
    {
      content:"Render props have always been a bit tricky for me. Can't wait to see how this series breaks it down. Thanks for sharing!",
      channelIcon:"https://images.pexels.com/photos/18107025/pexels-photo-18107025/free-photo-of-man-reading-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username:"mikerod",
      fullName:"Michael Rodriguez",
      updatedAt:"2024-01-27T10:34:29.851+00:00"
    },
    {
      content:"This series is exactly what I've been looking for! Excited to dive into these advanced React patterns. Thanks for putting this together!",
      channelIcon:"https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-woman-reading-book-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username:"sarahjv",
      fullName:"Sarah Johnson",
      updatedAt:"2024-02-12T06:50:30.579+00:00"
    },
    {
      content:"Render props have always been a bit tricky for me. Can't wait to see how this series breaks it down. Thanks for sharing!",
      channelIcon:"https://images.pexels.com/photos/18107025/pexels-photo-18107025/free-photo-of-man-reading-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username:"mikerod",
      fullName:"Michael Rodriguez",
      updatedAt:"2024-01-27T10:34:29.851+00:00"
    },

  ]

  constructor(private dialogRef:DialogRef<CollapsableCommentsComponent>){
    
  }
  ngOnInit(): void {
    
  }

  onAddComment(){
    if(this.addComment.valid && this.addComment.value){
      const newComment = this.addComment.value
      // this.commentService.addComment(commentContent).subscribe((res) => {
      //   this.insertNewTweetAndClearForm(res);
      // });
    }

  }

  // insertNewTweetAndClearForm(res: any) {
  //   const comment = {
  //     tweetedAt: res.data.createdAt,
  //     content: res.data.content,
  //   };
  //   this.commentsData.push(comment);
  //   this.addComment.reset();
  // }

  onClose(){
    this.dialogRef.close()
  }
}
