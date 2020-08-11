import { SongSheetInterface } from './../interface/songsheet-interface';
import { HottagInterface } from './../interface/hottag-interface';
import { Injectable, Inject } from '@angular/core';
import { ServiceModule, API_CONFIG } from './service.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BannerInterface } from '../interface/banner-interface';
import { map } from 'rxjs/internal/operators';
@Injectable({
  providedIn: ServiceModule
})
export class HomeService {

  constructor(private http: HttpClient , @Inject(API_CONFIG) private uri: string) { }

  getBanners(): Observable<BannerInterface[]> {
   const data = this.http.get(this.uri + 'banner').pipe(
     map((res: { banners: BannerInterface[] }) => res.banners));

   return data;
  }

  getHotTags(): Observable<HottagInterface[]> {
    return this.http.get(this.uri + 'playlist/hot')
      .pipe(map((res: { tags: HottagInterface[] }) => {
        return res.tags.sort((x: HottagInterface, y: HottagInterface) => x.position - y.position).slice(0, 5);
      }));
  }

  getPerosonalSheetList(): Observable<SongSheetInterface[]> {
    return this.http.get(this.uri + 'personalized')
      .pipe(map((res: { result: SongSheetInterface[] }) => res.result.slice(0, 16)));
  }
}
