import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe/recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from "@angular/router";
import { NotifierService } from "../../core/notifier.service";
import {element} from "protractor";

@Component({
  selector: 'fg-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.sass']
})
export class SingleRecipeComponent{
  notesOpen: boolean;
  commentsOpen: boolean;
  userRating: boolean[];
  rated: boolean;
  editingMap: boolean[];
  oldComment: string;
  recipe: Recipe;

  constructor(
      private route: ActivatedRoute,
      private recipes: RecipeService,
      private notifier: NotifierService
  ) {
    this.notesOpen = false;
    this.commentsOpen = true;
    this.userRating = new Array(5).fill(false);
    this.rated = false;
    this.oldComment = '';
  }

  ngOnInit() {
    let recipeID = this.route.snapshot.params['id'];
    this.recipes.getRecipe(recipeID).subscribe(
        recipe => this.recipe = recipe,
        error => console.log(error)
    );
      //this.editingMap = this.recipe.comments.length ? new Array(this.recipe.comments.length).fill(false) : null
  }

    get getAvailableIngredientsRatio(): string {
      let available = this.recipe.ingredientQuantities;
      let missing = this.recipe.missingIngredientQuantities;

      if(available && missing){
          let ratio = available.length / (available.length + missing.length);

          return ratio * 100 + '%';
      }
      else return 'Brak danych';
  };

    get stars(): boolean[] {
        if(this.recipe)
            return [
                ...Array(this.recipe.rating).fill(true),
                ...Array(5-this.recipe.rating).fill(false)
            ];
        else
            return new Array(5).fill(false);
};

  notesState(){
    this.notesOpen = !this.notesOpen;
  }

  commentsState(){
    this.commentsOpen = !this.commentsOpen;
  }

  rate(i) {
      let rating = i+1;
      this.userRating = [
          ...Array(rating).fill(true),
          ...Array(5 - rating).fill(false)
      ];
      this.rated = true;


       //recipes.rate(recipeID, rating)
  }




  removeComment(index) {
      if(confirm('Czy na pewno chcesz usunąć komentarz?')) {
          this.recipe.comments.splice(index, 1);
          this.notifier.success('Komentarz został usunięty');
      }
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

      this.notifier.success('Komentarz został zapisany pomyślnie');
  }
}

