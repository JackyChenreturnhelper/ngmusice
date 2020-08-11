import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_CONFIG, ServiceModule } from './service.module';
import { SingerInterface } from '../interface/singer-interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import queryString from 'query-string';


interface SingerParams {
  offset: number;
  limit: number;
  cat?: string;
}

const defaultParams: SingerParams = {
  offset: 0,
  limit: 9,
  cat: '5001'
};

@Injectable({
  providedIn: ServiceModule
})



export class SingerService {

  constructor(private http: HttpClient , @Inject(API_CONFIG) private uri: string) { }

  getEnterSinger(args: SingerParams = defaultParams): Observable<SingerInterface[]> {
    const params = new HttpParams({ fromString: queryString.stringify(args) });
    return this.http.get(this.uri + 'artist/list', { params })
    .pipe(map((res: { artists: SingerInterface[] }) => res.artists));
  }
}
