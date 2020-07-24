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

  constructor(private http: HttpClient ,@Inject(API_CONFIG) private uri: string) { }

  getBanners(): Observable<BannerInterface[]>
  {

   const data = this.http.get(this.uri + 'banner').pipe(
     map((res: { banners: BannerInterface[] }) => res.banners));

   return data;
  }
}
