import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent {
  title = 'navbar';
  toggled = false;
  reactive(){
    if(this.toggled){
      this.toggled = false;
    }else{
      this.toggled = true;
    }
  }
}