import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any{
    //controlar la escritura del filter
    if(args ==='' || args.length < 3) return value;
    const resultPosts=[];
    for(const post of value){
      if(post.title.toLowerCase().indexOf(args.toLowerCase())>-1){//hacer la busqueda con el titulo
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
