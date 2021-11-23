import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-albums-detail',
  templateUrl: './albums-detail.component.html',
  styleUrls: ['./albums-detail.component.scss']
})
export class AlbumsDetailComponent implements OnInit {
  albums: any;

  constructor(
    private userService: UserService,
    private activateRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.getAlbumsById()
    console.log(this.albums)

  }
  getAlbumsById(){
    return this.activateRoute.params.subscribe(params=>{
      let userId= params['userId']
      this.userService.getUserPosts(userId).subscribe((res)=>{
        this.albums=res,console.log(res)
      })
    })
  }
}
