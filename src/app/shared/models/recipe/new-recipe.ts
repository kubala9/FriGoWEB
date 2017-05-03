import { IngredientQuantity } from '../ingredient-quantity/ingredient-quantity';
import { Tag } from '../tag';

export interface CreateRecipe {
  title?: string;
  description?: string;
  createIngredientQuantities?: IngredientQuantity[];
  tags?: Tag[];
  base64Picture?: string;
}
