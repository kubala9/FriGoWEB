import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe/recipe';

@Component({
  selector: 'fg-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.sass']
})
export class CookbookComponent implements OnInit {
  public recipes: Recipe[] = [];

  constructor() { }

  ngOnInit() {
  }

}
