import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  router: string;
  title = 'app';
  loaded = false;
  display = false;
  fade = false;

  constructor(private _router: Router){}

  ngAfterViewInit(){
    /*
    setTimeout(() => {
      this.display = true;
      console.log(this.display);
    }, 1000)
    setTimeout(() => {
      this.fade = true;
      console.log(this.display);
    }, 3000)
    setTimeout(() => {
      this.loaded = true;
    }, 5000);
    */
  }
}
