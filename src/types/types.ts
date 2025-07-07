export type Category = {
  _id: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
  v: number;
  foods: Food[];
  count: number;
};

export type Food = {
  _id: string;
  foodName: string;
  category: string;
  price: number;
  image: string;
  ingredients: string;
  createdAt: string;
  updatedAt: string;
  v: number;
  quantity: number;
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
