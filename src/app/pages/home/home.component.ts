import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { BannerInterface } from 'src/app/interface/banner-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  private bannerlist: BannerInterface[]
  constructor(private homeServe: HomeService) {

  }

  ngOnInit() {
   this.homeServe.getBanners().subscribe(observer => {
    this.bannerlist = observer;
   });
  }

}
