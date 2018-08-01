import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';



@Injectable()
export class HttpService {
readonly URL_DB='https://api.mlab.com/api/1/databases/wierszownica_db/collections/artists';
readonly param = new HttpParams().set('apiKey','WpMGmgPXuazvv3q-rx8GsusKr0KZHP4C');




  constructor(private http:HttpClient) {
    this.getArtist();
   }

getArtist(){
  this.http.get(this.URL_DB,{params:this.param})
  .subscribe(artists =>{
console.log(artists);
  });
}


}
