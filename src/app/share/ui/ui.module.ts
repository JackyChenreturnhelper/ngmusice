import { NgModule } from '@angular/core';
import { SingleSheetComponent } from './single-sheet/single-sheet.component';
import { PalyCountPipe } from './paly-count.pipe';
import { PlayerModule } from './player/player.module';




@NgModule({
  declarations: [SingleSheetComponent, PalyCountPipe ],
  imports: [PlayerModule
  ],
  exports: [SingleSheetComponent, PalyCountPipe, PlayerModule]
})
export class UiModule { }
