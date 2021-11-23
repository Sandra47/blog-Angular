import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-todos-details',
  templateUrl: './todos-details.component.html',
  styleUrls: ['./todos-details.component.scss']
})
export class TodosDetailsComponent implements OnInit {
  todos: any;

  constructor(
    private userService: UserService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getTodosById()
    console.log(this.todos)
  }
  getTodosById(){
    return this.activateRoute.params.subscribe(params=>{
      let userId= params['userId']
      this.userService.getUser(userId).subscribe((res)=>{
        this.todos=res,console.log(res)
      })
    })

  }
   
}
