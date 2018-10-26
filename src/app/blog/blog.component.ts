import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { NgClass } from '@angular/common'
@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  scrollDist:number = 0;
  @HostListener('window:scroll', ['$event'])
  doSomething(event){
    console.log("Scroll Event", window.pageYOffset);
    if(window.pageYOffset > this.scrollDist){
      this.scrollDist = window.pageYOffset;
    }
    console.log("Scroll Dist", this.scrollDist);
  }
  constructor() { 
    console.log("test")
  }

  ngOnInit() {
    console.log("yooooo")
  }
}