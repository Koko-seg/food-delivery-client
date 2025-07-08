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

export type Order = {
  _id: string;
  foodName: string;
  orderNumber: string;
  status: string;
  date: string;
  address: string;
  food: Food;
  quantity: number;
  totalPrice: number;
};
