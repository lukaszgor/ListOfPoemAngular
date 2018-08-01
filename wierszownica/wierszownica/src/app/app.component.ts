import { Component } from '@angular/core';
import { ArtistService } from './services/artists.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],providers: [ArtistService]

})
export class AppComponent{
  title = 'app';
  constructor(artistService:ArtistService){

  }
}
