import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { HomeComponent } from '../../pages/home/home.component';
import { PostComponent } from 'src/app/pages/post/post.component';
import { AllPostsComponent } from 'src/app/all-posts/all-posts.component';
import { CreatePostComponent } from 'src/app/pages/create-post/create-post.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    RichTextEditorAllModule
  ],
  declarations: [HomeComponent, PostComponent, CreatePostComponent, AllPostsComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminLayoutModule {}
 