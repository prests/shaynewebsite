import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  loaded = false;
  ngAfterViewInit(){
    setTimeout(() => {
      this.loaded = true;
    }, 5000);
  }
}
