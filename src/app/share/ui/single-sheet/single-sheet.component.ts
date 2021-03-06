import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { SongSheetInterface } from 'src/app/interface/songsheet-interface';

@Component({
  selector: 'app-single-sheet',
  templateUrl: './single-sheet.component.html',
  styleUrls: ['./single-sheet.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleSheetComponent implements OnInit {

  @Input() sheet: SongSheetInterface;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPlay = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  playSheet(id: number) {

    this.onPlay.emit(id);
  }
}
