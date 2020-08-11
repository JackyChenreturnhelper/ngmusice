import { SongSheetInterface } from './../../interface/songsheet-interface';
import { HottagInterface } from './../../interface/hottag-interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { BannerInterface } from 'src/app/interface/banner-interface';

import { NzCarouselComponent } from 'ng-zorro-antd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  @ViewChild(NzCarouselComponent, { static: true }) private nzCarousel: NzCarouselComponent;

  public bannerlist: BannerInterface[ ];
  public hotTags: HottagInterface[];
  public songSheetList: SongSheetInterface []
  carouselActiveIndex = 0;
  constructor(private homeServe: HomeService) {
    this.getBanners();
    this.getHotTags();
    this.getPersonalizedSheetList();
  }

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


  ngOnInit() {


  }
  onBeforeChange({ to }) {
    this.carouselActiveIndex = to;
  }

  onChangeSlide(type: 'pre' | 'next') {
    this.nzCarousel[type]();
  }
}
