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
  carouselActiveIndex = 0;
  constructor(private homeServe: HomeService) {

  }

  ngOnInit() {
   this.homeServe.getBanners().subscribe(observer => {
    this.bannerlist = observer;
   });
   console.log(this.bannerlist);
  }
  onBeforeChange({ to }) {
    this.carouselActiveIndex = to;
  }

  onChangeSlide(type: 'pre' | 'next') {
    this.nzCarousel[type]();
  }
}
