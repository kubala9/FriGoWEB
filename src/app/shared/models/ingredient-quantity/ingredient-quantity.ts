import { Ingredient } from '../ingredient/ingredient';

export interface IngredientQuantity {
  quantity?: number;
  description?: string;
  ingredient?: Ingredient;
  id?: string;
}
