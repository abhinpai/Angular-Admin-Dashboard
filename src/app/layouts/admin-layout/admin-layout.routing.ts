import { Routes } from "@angular/router";

import { HomeComponent } from "../../pages/home/home.component";
import { PostComponent } from "src/app/pages/post/post.component";
import { AllPostsComponent } from "src/app/all-posts/all-posts.component";
import { AuthGuard } from "src/app/guards/auth-guard.service";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: HomeComponent },
  { path: "post", component: PostComponent },
  { path: "all-post", component: AllPostsComponent }
];
