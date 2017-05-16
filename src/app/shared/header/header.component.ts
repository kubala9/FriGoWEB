import { Component } from '@angular/core';

@Component({
  selector: 'fg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  menuOpened: boolean;

  constructor(){
    this.menuOpened = false;
  }

  changeMenuState(){
    this.menuOpened = !this.menuOpened;
  }
}
