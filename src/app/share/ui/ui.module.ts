import { NgModule } from '@angular/core';
import { SingleSheetComponent } from './single-sheet/single-sheet.component';
import { PalyCountPipe } from './paly-count.pipe';




@NgModule({
  declarations: [SingleSheetComponent, PalyCountPipe ],
  imports: [
  ],
  exports: [SingleSheetComponent, PalyCountPipe]
})
export class UiModule { }
