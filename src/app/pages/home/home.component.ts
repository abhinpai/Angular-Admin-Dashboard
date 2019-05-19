import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { IPost } from 'src/utils/models/IPostModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: any;
  constructor(private postSvc: PostService) {}

  ngOnInit(): void {
    this.postSvc.getPostData().subscribe(res => {
      this.posts =res;
    });
  }
}
