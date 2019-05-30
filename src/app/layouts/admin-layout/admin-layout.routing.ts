import { Routes } from "@angular/router";

import { HomeComponent } from "../../pages/home/home.component";
import { PostComponent } from "src/app/pages/post/post.component";
import { AllPostsComponent } from "src/app/all-posts/all-posts.component";
import { CreatePostComponent } from "src/app/pages/create-post/create-post.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: HomeComponent },
  { path: "post", component: PostComponent },
  { path: "all-post", component: AllPostsComponent },
  { path: "create", component: CreatePostComponent }
];
