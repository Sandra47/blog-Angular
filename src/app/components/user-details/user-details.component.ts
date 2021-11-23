import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { UserService } from 'src/app/services/user/user.service';
import {UserService} from '../../services/user/user.service'


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  usuarios: any;
 //vamos a inyectar los usuarios
  constructor(
         private userService:UserService,
        //  private router:Router,
         private activateRoute:ActivatedRoute


       ){}

  ngOnInit(): void {
    this.getUserById()
    console.log(this.usuarios)
  }

//  //vamos hacer un arreglo
//    public usuarios:Array<any>=[]
//    //vamos a inyectar los usuarios
//    constructor(
//      private userService:UserService
//    ){
//  //vamos a suscribir
//    this.userService.getUser(id).subscribe((resp: any) =>{
//      //console.log(resp)
//      this.usuarios=resp
//    });
//    }

   getUserById(){
     return this.activateRoute.params.subscribe(params=>{
       let userId= params['userId']
       this.userService.getUser(userId).subscribe((res)=>{
         this.usuarios=res,console.log(res)
       })
     })

   }

}
