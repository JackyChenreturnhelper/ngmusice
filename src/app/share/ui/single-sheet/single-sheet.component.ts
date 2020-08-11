import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SongSheetInterface } from 'src/app/interface/songsheet-interface';

@Component({
  selector: 'app-single-sheet',
  templateUrl: './single-sheet.component.html',
  styleUrls: ['./single-sheet.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleSheetComponent implements OnInit {

  @Input() sheet: SongSheetInterface;
  constructor() { }

  ngOnInit() {
  }

}
