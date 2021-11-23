import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { HeaderComponent } from './components/header/header.component';
import { UserService } from './services/user/user.service';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AlbumsDetailComponent } from './components/albums-detail/albums-detail.component';
import { TodosDetailsComponent } from './components/todos-details/todos-details.component';
import { CommentsPostComponent } from './components/comments-post/comments-post.component';
import { FotosComponent } from './components/fotos/fotos.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    HomeComponent,
    PostsComponent,
    HeaderComponent,
    PostDetailsComponent,
    AlbumsComponent,
    FilterPipe,
    AlbumsDetailComponent,
    TodosDetailsComponent,
    CommentsPostComponent,
    FotosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    

    
  ],
  providers: [
    UserService,
    UserDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
