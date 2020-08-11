import { SongSheetInterface } from './../../interface/songsheet-interface';
import { HottagInterface } from './../../interface/hottag-interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { BannerInterface } from 'src/app/interface/banner-interface';


import { NzCarouselComponent } from 'ng-zorro-antd';
import { SingerInterface } from 'src/app/interface/singer-interface';
import { SingerService } from 'src/app/service/singer.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  @ViewChild(NzCarouselComponent, { static: true }) private nzCarousel: NzCarouselComponent;

  public bannerlist: BannerInterface[ ];
  public hotTags: HottagInterface[];
  public songSheetList: SongSheetInterface [];
  public singers: SingerInterface[];
  carouselActiveIndex = 0;
  constructor(
    /*
    private homeServe: HomeService,
    private singerServe: SingerService,*/
    private route: ActivatedRoute) {
      this.route.data.pipe(map(res => res.homeDatas)).subscribe(([banners, hotTags, songSheetList, singers]) => {
        this.bannerlist = banners;
        this.hotTags = hotTags;
        this.songSheetList = songSheetList;
        this.singers = singers;
      });
  }
/*
  private getBanners() {
    this.homeServe.getBanners().subscribe(observer => {
      this.bannerlist = observer;
     });
  }
  private getHotTags() {
    this.homeServe.getHotTags().subscribe(tags => {
      this.hotTags = tags;
    });
  }
  private getPersonalizedSheetList() {
    this.homeServe.getPerosonalSheetList().subscribe(sheets => {
      this.songSheetList = sheets;
    });
  }

  private getEnterSingers() {
    this.singerServe.getEnterSinger().subscribe(singers => {
      this.singers = singers;
    });
  }
*/

  ngOnInit() {
  }
  onBeforeChange({ to }) {
    this.carouselActiveIndex = to;
  }

  onChangeSlide(type: 'pre' | 'next') {
    this.nzCarousel[type]();
  }
}
