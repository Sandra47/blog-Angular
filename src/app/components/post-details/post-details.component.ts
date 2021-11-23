import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../../services/user/user.service'
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  posts: any;

  constructor(
    private userService:UserService,
    private activateRoute:ActivatedRoute
    
  ) { }

  ngOnInit(): void {
    this.getPostById()
    console.log(this.posts)
  }
  getPostById(){
    return this.activateRoute.params.subscribe(params=>{
      let userId= params['userId']
      this.userService.getUserPosts(userId).subscribe((res)=>{
        this.posts=res,console.log(res)
      })
    })

  }


}
