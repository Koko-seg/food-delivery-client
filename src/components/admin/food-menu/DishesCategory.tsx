"use client";

import { Category } from "@/types/types";
import { AddCategoryModal } from "./AddCategoryModal";
import { DishesCategorySkeleton } from "./DishesCategorySkeleton";
import { useEffect, useState } from "react";

export const DishesCategory = () => {
  const [foodWithCategories, setFoodWithCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch("http://localhost:3800/food/");
      const data = await response.json();
      console.log("foodWithCategories: ", data);

      setFoodWithCategories(data.foodWithCategories);
    };
    getCategories();
  }, []);
  if (!foodWithCategories) return null;

  if (!foodWithCategories.length) return <DishesCategorySkeleton />;

  const allDishesCount = foodWithCategories.reduce(
    (acc, category) => acc + category.count,
    0
  );

  return (
    <div className="flex flex-col gap-4 p-6 bg-background rounded-xl">
      <p className="text-xl font-semibold">Dishes category</p>
      <div className="flex flex-wrap gap-3">
        {/* <div className="flex gap-2 px-4 py-2 border rounded-full">
          <p className="text-sm font-medium">All dishes</p>
          <p className="text-xs bg-black text-white rounded-full px-2 py-[2px] flex items-center font-semibold leading-4x">
            {allDishesCount}
          </p>
        </div> */}
        {foodWithCategories?.map((category, index) => (
          <div key={index} className="flex gap-2 px-4 py-2 border rounded-full">
            <p className="text-sm font-medium">{category?.categoryName}</p>
            <p className="text-xs bg-black text-white rounded-full px-[10px] py-[2px] flex items-center font-semibold leading-4x">
              {category?.count}
            </p>
          </div>
        ))}
        <AddCategoryModal />
      </div>
    </div>
  );
};
