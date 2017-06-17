import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../shared/models/recipe/recipe';
@Component({
  selector: 'fg-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})
export class NotesComponent implements OnInit {
  @Input()
  recipe: Recipe;

  notesOpen: boolean;

  constructor() {
    this.notesOpen = false;
  }

  ngOnInit() {
  }

  changeNotesState() {
    this.notesOpen = !this.notesOpen;
  }


}
