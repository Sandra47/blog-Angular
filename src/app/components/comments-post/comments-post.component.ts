import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-comments-post',
  templateUrl: './comments-post.component.html',
  styleUrls: ['./comments-post.component.scss']
})
export class CommentsPostComponent implements OnInit {
 Comments : any
  constructor(
    private activateRoute: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.getCommentsById()
    console.log(this.Comments)
  }


  getCommentsById(){
    return this.activateRoute.params.subscribe(params=>{
      let postId= params['postId']
      this.postService.getCommentsPost(postId).subscribe((res)=>{
        this.Comments=res,console.log(res)
      })
    })
  }
}
