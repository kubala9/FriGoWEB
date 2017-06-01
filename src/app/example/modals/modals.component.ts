import { Component, ViewChild } from '@angular/core';
import {Router} from "@angular/router";
import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'fg-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.sass']
})
export class ModalsComponent {

  
  @ViewChild('popup1') popup1: Popup;
  
  constructor() { }
  
    ClickButton(){
    this.popup1.options = {
        header: "Dodaj produkt",
        color: "#5cb85c", // red, blue.... 
        widthProsentage: 60, // The with of the popou measured by browser width 
        animationDuration: 0.5, // in seconds, 0 = no animation 
        showButtons: true, // You can hide this in case you want to use custom buttons 
        confirmBtnContent: "Dodaj", // The text on your confirm button 
        cancleBtnContent: "Anuluj", // the text on your cancel button 
        confirmBtnClass: "o-btn o-btn--color", // your class for styling the confirm button 
        cancleBtnClass: "o-btn o-btn-default", // you class for styling the cancel button 
        animation: "bounceI" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
    };

    this.popup1.show(this.popup1.options);
      }

}
