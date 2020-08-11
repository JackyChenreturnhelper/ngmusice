import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_TW } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { UiModule } from './ui/ui.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    UiModule
  ],
  exports: [
    NgZorroAntdModule,
    FormsModule,
    CommonModule,
    UiModule
  ]
})
export class ShareModule { }
