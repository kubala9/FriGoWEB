import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../shared/models/recipe/recipe';
import { Tag } from '../../shared/models/tag';
import { CookbookService } from '../cookbook.service';

@Component({
  selector: 'fg-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.sass'],
})
export class CookbookComponent implements OnInit {
  public recipes: Recipe[] = [];
  public tags: Tag[] = [];

  constructor(
    private router: Router,
    private cookbook: CookbookService
  ) { }

  ngOnInit() {
    this.cookbook.getRecipes().subscribe(
      recipes => this.recipes = recipes,
      error => console.log(error)
    );

    this.cookbook.getTags().subscribe(
      tags => this.tags = tags,
      error => console.log(error)
    );
  }

  onRecipeClick(id: string) {
    this.router.navigate(['/recipe', id]);
  }
}
