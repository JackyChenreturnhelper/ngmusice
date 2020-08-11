import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { first } from 'rxjs/internal/operators';
import { HomeService } from 'src/app/service/home.service';
import { SingerService } from 'src/app/service/singer.service';
import { BannerInterface } from 'src/app/interface/banner-interface';
import { HottagInterface } from 'src/app/interface/hottag-interface';
import { SongSheetInterface } from 'src/app/interface/songsheet-interface';
import { SingerInterface } from 'src/app/interface/singer-interface';

type HomeDataType = [BannerInterface[], HottagInterface[], SongSheetInterface[], SingerInterface[]];

@Injectable()
export class HomeResolverService implements Resolve<HomeDataType> {
  constructor(private homeServe: HomeService, private singerServe: SingerService) {}
  resolve(): Observable<HomeDataType> {
    return forkJoin([
      this.homeServe.getBanners(),
      this.homeServe.getHotTags(),
      this.homeServe.getPerosonalSheetList(),
      this.singerServe.getEnterSinger()
    ]).pipe(first());
  }
}
