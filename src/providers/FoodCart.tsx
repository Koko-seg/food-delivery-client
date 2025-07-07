"use client";

import { Food } from "@/types/types";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type FoodCartContextType = {
  foodCart: { food: Food; quantity: number; price: number }[];
  setFoodCart: Dispatch<
    SetStateAction<{ food: Food; quantity: number; price: number }[]>
  >;
};

export const FoodCartContext = createContext<FoodCartContextType>(
  {} as FoodCartContextType
);

export default function FoodCartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [foodCart, setFoodCart] = useState<
    { food: Food; quantity: number; price: number }[]
  >([]);
  return (
    <FoodCartContext.Provider value={{ foodCart, setFoodCart }}>
      {children}
    </FoodCartContext.Provider>
  );
}
