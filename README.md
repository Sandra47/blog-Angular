# PruebaAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## para generar interfas y servicio
ng g service/post
ng g interace interfaces/post


,,,,,,,
En la interfas Post tiene los atributos

export interface Posts {
    userId : string;
    id: string;
    title: string;
    body: string; 
}
,,,,,,,

,,,,,,,,
dentro de los servico 
post.services.ts importamos y se injecta.
import { HttpClient } from "@angular/common/http";
import { Posts } from '../interfaces/posts';
constructor(
      private   http:HttpClient
  ) { }
,,,,,,,
,,,,,

Antes de empezar con las llamadas hay que conocer que Angular tiene un modulo que facilita esta tarea, el modulo es HttpClient. Con este modulo no necesitas usar fetch ni ajax ni nada.

Para usar HttpClient de Angular en cualquier parte, tenemos que importar el módulo HttpClientModule, en la sección imports de el app.module.ts:

import { HttpClientModule } from "@angular/common/http";
,,,,,,,

,,,,,,
usar los servicios dentro de los componentes
Ahora se injecta los servicios en los componente
primero tenemos que importar el servicio en el componente:
import { PostService } from './services/post.service';

A continuación lo inyectamos en el constructor del componente:
constructor(private   http:PostService) { }
,,,,,,,,,


,,,,,
también tenemos que importarlo y inyectarlo en los constructores de los servicios desde los que vayamos a realizar llamadas HTTP
import { HttpClient } from "@angular/common/http";
,,,,,

,,,,
en el servicio copiamos.
getAllPosts(){
    const path='https://jsonplaceholder.typicode.com/posts';
    return this.http.get<Posts[]>(path);
}
,,,,,

,,,,,
Ahora En postComponent colocamos 
getAllPosts(){
  this.postService.getAllPosts()
  .subscribe(posts =>{
      console.log(posts);
    });
}
,,,,,


,,,,,,
se crea un botton
<button {click}="getAllPosts()">getAllPosts()</button>
,,,,,,

,,,,,,
Creamos una variable api
private api= 'https://jsonplaceholder.typicode.com/posts';
,,,,,,

,,,,,,
Ahora se hacer el get para uno en especifico en el servicio
getPosts(){
  this.postService.getPosts()
  .subscribe(post =>{
      console.log(post);
    });
}
,,,,,,

,,,,,,

En el archivo component
getPost(){
  this.postService.getPost('2')
  .subscribe(post =>{
      console.log(post);
  });
}
,,,,,,
Creamos el la carpeta shared para nuestro buscador
ng g c components/searc
se nos crea los componentes que  necesitamos
si nos vamos al search.component.ts
tomamos 
app-search
y lo colocamos en posts
para q se nos mustra nuestro buscador en lo posts
,,,,,,


......
 ![Screenshot](https://drive.google.com/drive/folders/1TuWPTxzI4Y6SfMYBC1Lnn6hOtkoJyuZi)
......


