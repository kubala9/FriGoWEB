import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../shared/models/recipe/recipe';

@Component({
  selector: 'fg-recipe-tile',
  templateUrl: './recipe-tile.component.html',
  styleUrls: ['./recipe-tile.component.sass']
})
export class RecipeTileComponent implements OnInit {
  @Input()
  recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  get fitness(): string {
    const value = Math.round(this.recipe.fitness * 100);
    return `${value}%`;
  }

  get stars(): boolean[] {
    if(this.recipe.rating)
      return [
      ...Array(this.recipe.rating).fill(true),
      ...Array(5-this.recipe.rating).fill(false)
      ];
    else
      return new Array(5).fill(false);
  }
}
