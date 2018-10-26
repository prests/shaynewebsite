import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './homepage/homepage.component';
import { NavBarComponent } from './navbar/navbar.component';
import { FootBarComponent } from './footbar/footbar.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CrazyLoaderComponent } from './crazyloader/crazyloader.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', component: HomePageComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Blog', component: BlogComponent},
  { path: 'Crazy', component: CrazyLoaderComponent},//This needs to be changed eventually so people only see this when they first come on site
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
