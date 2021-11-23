import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  filterPost='';

  ngOnInit(): void {
  }
  //vamos hacer un arreglo
  public posts:Array<any>=[]
  //vamos a inyectar los usuarios
  constructor(
    private postService:PostService
  ){
//vamos a suscribir
  this.postService.getAllPosts().subscribe((resp: any) =>{
    //console.log(resp)
    this.posts=resp
  });
  }

}
