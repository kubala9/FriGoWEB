import { Comment } from '../comment/comment';
import { IngredientQuantity } from '../ingredient-quantity/ingredient-quantity';
import { Tag } from '../tag';
import { UserStub } from '../stubs/user.stub';

export interface Recipe {
  id?: string;
  title?: string;
  description?: string;
  ingredientQuantities?: IngredientQuantity[];
  comments?: Comment[];
  tags?: Tag[];
  user?: UserStub;
  base64Picture?: string;
  rating?: number;
  createdAt?: Date;
  fitness?: number;
  missingIngredientQuantities?: IngredientQuantity[];
}
