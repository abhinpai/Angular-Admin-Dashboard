import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { PostComponent } from 'src/app/post/post.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'post',           component: PostComponent },
];
