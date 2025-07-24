export type Category = {
  _id: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  foods: Food[];
};

export type Food = {
  _id: string;
  foodName: string;
  category: Category;
  price: number;
  image: string;
  ingredients: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type FoodItem = {
  foodName: string;
  image: string;
  ingredients: string;
  price: number;
};
