import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ CommonModule, RouterModule ],
  declarations: [ HeaderComponent, ContactComponent ],
  exports:      [ CommonModule, FormsModule, HeaderComponent]
})
export class SharedModule { }