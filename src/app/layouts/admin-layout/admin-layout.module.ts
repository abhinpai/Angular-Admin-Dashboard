import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { HomeComponent } from '../../pages/home/home.component';
import { PostComponent } from 'src/app/pages/post/post.component';
import { AllPostsComponent } from 'src/app/all-posts/all-posts.component';
import { AuthGuard } from 'src/app/guards/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule
  ],
  declarations: [HomeComponent, PostComponent, AllPostsComponent],
  providers: [AuthGuard]
})
export class AdminLayoutModule {}
