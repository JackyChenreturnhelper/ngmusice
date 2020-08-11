import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeResolverService } from './resolve/home-resolve.service';


const routes: Routes = [
  {path : 'home', component: HomeComponent , resolve: { homeDatas: HomeResolverService }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [HomeResolverService]
})
export class HomeRoutingModule { }
