import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  public posts: any=[]
  title = 'prueba-angular';
  constructor(
    private  postService:PostService
  ) { }
  ngOnInit(): void{
    this.postService.getAllPosts()
     // this.postService.getAllPosts()
      .subscribe(posts =>{
        console.log(posts);
        this.posts=posts;
      });
 }

}
// getPost(){
//   this.postService.getPost('2')
//    .subscribe (post =>{
//     console.log(post);
  
//   });
// }

