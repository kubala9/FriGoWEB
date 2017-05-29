import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe/recipe';
import { CookbookService } from '../cookbook.service';

@Component({
  selector: 'fg-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.sass']
})
export class CookbookComponent implements OnInit {
  public recipes: Recipe[] = [];

  constructor(
    private cookbook: CookbookService
  ) { }

  ngOnInit() {
    this.cookbook.getRecipes().subscribe(
      recipes => this.recipes = recipes,
      error => console.log(error)
    );
  }

}
