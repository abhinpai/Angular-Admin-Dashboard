import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
  posts: any;
  constructor(private postSvc: PostService, private _router: Router) {}

  ngOnInit(): void {
    this.postSvc.getPostData().subscribe(res => {
      this.posts =res;
    });
  }
}
