import { Comment } from './comment/comment';
import { IngredientQuantity } from './ingredient-quantity/ingredient-quantity';
import { Recipe } from './recipe/recipe';

export interface User {
  id?: string;
  userName?: string;
  comments?: Comment[];
  recipes?: Recipe[];
  ingredientQuantities?: IngredientQuantity[];
}
