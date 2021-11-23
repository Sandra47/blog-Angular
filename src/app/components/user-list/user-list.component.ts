import { Component, OnInit } from '@angular/core';
import{UserService} from '../../services/user/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  ngOnInit(): void {
    
  }
   //vamos hacer un arreglo
   public usuarios:Array<any>=[]
   //vamos a inyectar los usuarios
   constructor(
     private userService:UserService
   ){
 //vamos a suscribir
   this.userService.getUsuarios().subscribe((resp: any) =>{
     //console.log(resp)
     this.usuarios=resp
   });
   }
  

  

}
