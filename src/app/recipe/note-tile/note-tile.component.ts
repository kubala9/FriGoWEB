import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../shared/models/recipe/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'fg-note-tile',
  templateUrl: './note-tile.component.html',
  styleUrls: ['./note-tile.component.sass']
})
export class NoteTileComponent implements OnInit {
  // @Input()
  //   recipe: Recipe;
  // @Input()
  //   note: object;
  // @Input()
  //   noteIndex: number;

  // isEditing: boolean;
  // editModel: string;

  constructor(
      // private recipes = RecipeService
  ) {
  }

  ngOnInit() {
    // this.isEditing = false;
    // this.editModel = note.Note;
  }

  // ifNotesEditable() {
  //   return localStorage.getItem('userName') === this.recipe.user.userName;
  // };
}
