import { Component, Input, OnInit } from '@angular/core';
import { TweetService } from '../services/tweet.service';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss'],
})
export class TweetsComponent implements OnInit {
  @Input()
  channelIcon: string = '';
  @Input()
  channelName: string = '';
  @Input()
  myChannel:boolean = false;

  tweetData: any;
  username: string = '';

  newTweet = new FormControl('', Validators.required);

  constructor(
    private tweetService: TweetService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username')!;
    this.setTweetData();
  }

  setTweetData() {
    this.tweetService.getUserTweets(this.username).subscribe((tweets) => {
      this.tweetData = tweets.data;
    });
  }

  createNewTweet() {
    if (this.newTweet.valid && this.newTweet.value) {
      const tweetContent = this.newTweet.value;
      this.tweetService.createTweet(tweetContent).subscribe((res) => {
        this.insertNewTweetAndClearForm(res);
      });
    }
  }

  insertNewTweetAndClearForm(res: any) {
    const tweet = {
      tweetedAt: res.data.createdAt,
      content: res.data.content,
    };
    this.tweetData.push(tweet);
    this.newTweet.reset();
  }
}
