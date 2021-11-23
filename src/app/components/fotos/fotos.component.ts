import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnInit {
  photos: any;

  constructor(
    private albumsService:AlbumsService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPhotosById()
    console.log(this.photos)
  }

  getPhotosById(){
    return this.activateRoute.params.subscribe(params=>{
      let albumId= params['albumId']
      this.albumsService.getAlbumsPhotos(albumId).subscribe((res)=>{
        this.photos=res,console.log(res)
      })
    })

  }
}
