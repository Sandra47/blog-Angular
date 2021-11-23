import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsDetailComponent } from './components/albums-detail/albums-detail.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { CommentsPostComponent } from './components/comments-post/comments-post.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { HomeComponent } from './components/home/home.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { TodosDetailsComponent } from './components/todos-details/todos-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch:'full',
  },
  { path: 'home', component: HomeComponent,  pathMatch: 'full'},
  //{ path: 'user-list', component: UserListComponent,  pathMatch: 'full'},
  { path: 'user/:userId/user-details', component: UserDetailsComponent,  pathMatch: 'full'},
  {path: 'user/:userId/posts-details', component: PostDetailsComponent, pathMatch: 'full'},
  {path:'user/:userId/albums-detail', component: AlbumsDetailComponent, pathMatch: 'full' },
  {path: 'user/:userId/todos-details', component: TodosDetailsComponent, pathMatch: 'full'},
 
  { path: 'posts', component: PostsComponent,  pathMatch: 'full'},
  { path: 'posts/:postId/comments-post', component: CommentsPostComponent,  pathMatch: 'full'},
  {path: 'albums', component:AlbumsComponent, pathMatch: 'full'},
  {path: 'albums/:albumId/photos', component:FotosComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
