import { Recipe } from '../shared/models/recipe/recipe';
import { PotatoBaseimg } from './potato.baseimg';

export const RecipesMock: Recipe[] = [
  {
    id: '1',
    title: 'Ziemniaki w mundurkach',
    base64Picture: PotatoBaseimg,
    rating: 3,
    fitness: 0.51,
    tags: [
      {
        name: "ziemniaki"
      }
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus deleniti dolorem et libero nihil, tenetur. At commodi debitis doloremque dolorum hic id magnam, minima nemo officia quam quia quis recusandae tempora totam voluptatem. Alias animi asperiores consectetur dignissimos doloremque eum ipsum laboriosam nam, natus obcaecati placeat porro, possimus provident recusandae reiciendis, rerum totam ut voluptatem voluptates voluptatibus. Nisi, pariatur!',
    comments: [
      {
        id: '1',
        text: 'komentarzyk',
        createdAt: new Date(),
        user: {
          userName: 'emilo113',
          id: '1'
        },
        recipe: {
          title: 'Ziemniaki w mundurkach',
          id: '1'
        }
      },
      {
        id: '2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus deleniti dolorem et libero nihil, tenetur. At commodi debitis doloremque dolorum hic id magnam, minima nemo officia quam quia quis recusandae tempora totam voluptatem.',
        createdAt: new Date(),
        user: {
          userName: 'ZenonZWarszawy',
          id: '2'
        },
        recipe: {
          title: 'Ziemniaki w mundurkach',
          id: '1'
        }
      }

    ]
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
  },
  {
    id: '6',
    title: 'Bigos ze śliwką',
    base64Picture: '',
    rating: 5,
    fitness: 0.1
  }
]
