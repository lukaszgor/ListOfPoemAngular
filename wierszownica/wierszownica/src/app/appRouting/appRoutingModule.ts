
import {HeaderComponent} from '../main-view/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule,Route } from '@angular/router';
import { MainBackgroundComponent } from 'src/app/main-view/main-background/main-background.component';

const APP_ROUTERS  :Route []=[
  {path:'',component:<any>HeaderComponent},{path:'dupa',component:<any>MainBackgroundComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTERS)
  ],
  exports:[ RouterModule]
})
export class appRoutingModule {}
