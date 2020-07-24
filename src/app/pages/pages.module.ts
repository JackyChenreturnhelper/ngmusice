import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [],
  imports: [
    HomeModule
  ],
  exports: [
    HomeModule
  ]

})
export class PagesModule { }
