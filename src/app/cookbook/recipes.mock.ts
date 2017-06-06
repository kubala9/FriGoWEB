import { Recipe } from '../shared/models/recipe/recipe';
import { PotatoBaseimg } from './potato.baseimg';

export const RecipesMock: Recipe[] = [
  {
    id: '1',
    title: 'Ziemniaki w mundurkach',
    base64Picture: PotatoBaseimg,
    rating: 3,
    fitness: 0.51
  },
  {
    id: '2',
    title: 'Parówki z jajkiem',
    base64Picture: '',
    rating: 2,
    fitness: 0.52
  },
  {
    id: '3',
    title: 'Dżem z cebuli',
    base64Picture: '',
    rating: 4,
    fitness: 0.43
  },
  {
    id: '4',
    title: 'Kapusta bo Jaktorowsku',
    base64Picture: '',
    rating: 5,
    fitness: 0.2
  },
  {
    id: '5',
    title: 'Piekielne żeberka',
    base64Picture: '',
    rating: 4,
    fitness: 0.8
  }
]
