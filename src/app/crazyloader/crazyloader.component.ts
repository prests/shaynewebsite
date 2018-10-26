import { Component, OnInit } from '@angular/core';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'crazyloader',
  templateUrl: './crazyloader.component.html',
  styleUrls: ['./crazyloader.component.scss']
})
export class CrazyLoaderComponent {
  title = "Shayne's world";
  loaded = false;
  display = false;
  ngOnInit(){
    setTimeout(() => {
      this.display = true;
      console.log(this.display);
    }, 1000)
    setTimeout(() => {
      this.loaded = true;
    }, 3500);
  }
}