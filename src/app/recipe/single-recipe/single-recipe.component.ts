import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe/recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'fg-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.sass']
})
export class SingleRecipeComponent{
  notesOpen: boolean;
  commentsOpen: boolean;
  ratingArray: boolean[];
  rated: boolean;
  editingMap: boolean[];
  oldComment: string;
  recipe: Recipe;


  constructor(
      private route: ActivatedRoute,
      private recipes: RecipeService
  ) {
    this.notesOpen = false;
    this.commentsOpen = true;
    this.ratingArray = new Array(5).fill(false);
    this.rated = false;
    this.oldComment = '';
  }

  ngOnInit() {
    let recipeID = this.route.snapshot.params['id'];
    this.recipe = this.recipes.getRecipe(recipeID-1);
    this.editingMap = new Array(this.recipe.comments.length).fill(false);
  }

  notesState(){
    this.notesOpen = !this.notesOpen;
  }

  commentsState(){
    this.commentsOpen = !this.commentsOpen;
  }

  starsOnHover(index) {
      if(!this.rated){
          this.ratingArray.forEach((star, i) => {
              if(i <= index) this.ratingArray[i] = true;
              else this.ratingArray[i] = false;
          });
      }
  }

  starsOnLeave() {
      if(!this.rated){
          this.ratingArray.fill(false);
      }
  }

  starsOnClick() {
       this.rated = true;
  }

    get stars(): boolean[] {
        return [
            ...Array(this.recipe.rating).fill(true),
            ...Array(5-this.recipe.rating).fill(false)
        ]
    }

  removeComment(index) {
      this.recipe.comments.splice(index, 1);
  }

  editComment(index, content) {
      this.oldComment = content;
      this.editingMap[index] = true;
  }

  cancelCommentEdition(index) {
      this.recipe.comments[index].text = this.oldComment;
      this.editingMap[index] = false;
  }

  saveCommentEdition(index) {
      this.editingMap[index] = false;
  }
}

