import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

 

  ngOnInit(): void {
  
  }

  public albums:Array<any>=[]
  //vamos a inyectar los albunes
  constructor(
    private albumsService:AlbumsService
  ){
//vamos a suscribir
  this.albumsService.getAlbums().subscribe((resp: any) =>{
    //console.log(resp)
    this.albums=resp
  });
  }

}
