import { User } from '../../shared/models/user';

export const user: User = {
  id: "string",
  userName: "string",
  comments: [
    {
      id: "string",
      text: "string",
      createdAt: new Date(),
      recipe: {
        title: "string",
        id: "string"
      }
    }
  ],
  recipes: [
    {
      title: "string",
      id: "string"
    }
  ],
  ingredientQuantities: [
    {
      quantity: 0,
      description: "string",
      ingredient: {
        name: "string",
        unitId: "string",
        unit: {
          name: "string",
          id: "string"
        },
        id: "string"
      },
      id: "string"
    }
  ]
}
