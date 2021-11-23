import { Injectable } from '@angular/core';

//import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Post } from '../interfaces/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
//se crea una variabal api
private api='https://jsonplaceholder.typicode.com';
  constructor(
      private   http:HttpClient
  ) { }
  getAllPosts(){
    const path='https://jsonplaceholder.typicode.com/posts';
    return this.http.get<Post[]>(path);
}
//se consulta para un solo post
getPost(id: string){
  const path=`${this.api}/posts/${id}`;
  return this.http.get<Post[]>(path);
}

getCommentsPost(postId:any){
  const path=`${this.api}/posts/${postId}/comments`;
  return this.http.get<Post[]>(path);
}
// getCommentsPost(postId:any):Observable<any>{
//   return this.http.get<any>(this.api+"/"+"posts"+"/"+postId+"/comments");

// }


}

