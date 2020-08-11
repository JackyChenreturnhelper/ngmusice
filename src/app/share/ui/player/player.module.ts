import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { SliderModule } from '../slider/slider.module';



@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    SliderModule
  ],
  exports: [PlayerComponent]
})
export class PlayerModule { }
