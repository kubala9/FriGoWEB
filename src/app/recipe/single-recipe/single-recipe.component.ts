import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.sass']
})
export class SingleRecipeComponent{
  notesOpen: boolean;
  commentsOpen: boolean;

  constructor() {
    this.notesOpen = false;
    this.commentsOpen = true;
  }

  notesState(){
    this.notesOpen = !this.notesOpen;
  }

  commentsState(){
    this.commentsOpen = !this.commentsOpen;
  }
}

