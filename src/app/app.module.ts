import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Components
import { HomePageComponent } from './homepage/homepage.component';
import { NavBarComponent } from './navbar/navbar.component';
import { FootBarComponent } from './footbar/footbar.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CrazyLoaderComponent } from './crazyloader/crazyloader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    FootBarComponent,
    AboutComponent,
    BlogComponent,
    CrazyLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
