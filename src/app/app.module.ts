import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';

import { RecipeModule } from './recipe/recipe.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    RecipeModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
