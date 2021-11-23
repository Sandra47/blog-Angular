import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const url ='https://jsonplaceholder.typicode.com'
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(
    private http:HttpClient
  ) { }
  getAlbums():Observable<any>{
     
    return this.http.get<any>(url+"/"+"albums");

  }
}
