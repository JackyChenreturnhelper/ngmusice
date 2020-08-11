import { Injectable, Inject } from '@angular/core';
import { ServiceModule, API_CONFIG } from './service.module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SongUrlInterface } from '../interface/song-url-interface';
import { map } from 'rxjs/internal/operators';
import { SongInterface } from '../interface/song-interface';

@Injectable({
  providedIn: ServiceModule
})
export class SongService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) { }

  getSongUrl(ids: string): Observable<SongUrlInterface[]> {
    const params = new HttpParams().set('id', ids);
    return this.http.get(this.uri + 'song/url', { params })
    .pipe(map((res: { data: SongUrlInterface[] }) => res.data));
  }


  getSongList(songs: SongInterface | SongInterface[]): Observable<SongInterface[]> {
    const songArr = Array.isArray(songs) ? songs.slice() : [songs];
    const ids = songArr.map(item => item.id).join(',');
    return Observable.create(observer => {
      this.getSongUrl(ids).subscribe(urls => {
        observer.next(this.generateSongList(songArr, urls));
      });
    });
  }


  private generateSongList(songs: SongInterface[], urls: SongUrlInterface[]): SongInterface[] {
    const result = [];
    songs.forEach(song => {
      // tslint:disable-next-line: no-shadowed-variable
      const url = urls.find( url => url.id === song.id).url;
      if (url) {
        result.push({ ...song, url });
      }
    });
    return result;
  }
}
