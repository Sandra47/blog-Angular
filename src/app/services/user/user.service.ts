import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
//import { User } from 'src/app/interfaces/user';

const url ='https://jsonplaceholder.typicode.com'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  //se crea una variabal api
  
      constructor(
        private http:HttpClient 
    ) { }
    
    //generams un metodo del api
    getUsuarios():Observable<any>{
   
      return this.http.get<any>(url+"/"+"users");

    }
    // getUser(id:number){
    //   const path=`${this.url}/${id}`;
    //   return this.http.get<User[]>(path);
    // }
    getUser(userId:any):Observable<any>{
      return this.http.get<any>(url+"/"+"users"+"/"+userId);

    }
    getUserPosts(userId:any):Observable<any>{
      return this.http.get<any>(url+"/"+"users"+"/"+userId+"/posts");

    }
    getUserAlbums(userId:any):Observable<any>{
      return this.http.get<any>(url+"/"+"users"+"/"+userId+"/albums");
    }
    getUserTodos(userId:any):Observable<any>{
      return this.http.get<any>(url+"/"+"users"+"/"+userId+"/todos");

    }
}
