import { IngredientQuantity } from '../shared/models/ingredient-quantity/ingredient-quantity';
import { IngredientMock } from './ingredient.mock';

export const IngredientQuantityMock: IngredientQuantity[] = [ {
    quantity: 200,
    description: 'Opis',
    ingredient: IngredientMock,
    id: '1'  
},
{
    quantity: 10,
    description: 'Opis',
    ingredient: IngredientMock,
    id: '2'
}
]