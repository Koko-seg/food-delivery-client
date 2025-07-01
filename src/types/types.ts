export type Category = {
  _id: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
  v: number;
  food: Food[];
};

export type Food = {
  _id: string;
  foodName: string;
  category: string;
  price: string;
  image: string;
  ingredients: string;

  createdAt: string;
  updatedAt: string;
  v: number;
};
