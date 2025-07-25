import { SidebarDashLine } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { FoodType } from "@/constants/food";
import { Category, Food, FoodItem } from "@/types/types";

import { CircleX, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type OrderSheetFoodItemProps = {
  food: FoodType;
  quantity: number;
  onRemove: (id: string) => void;
  onChangeQuantity: (id: string, newQuantity: number) => void;
};
export const OrderSheetFoodItem = ({
  food,
  quantity,
  onRemove,
  onChangeQuantity,
}: OrderSheetFoodItemProps) => {
  const addQuantity = () => {
    onChangeQuantity(food._id, quantity + 1);
  };

  const subtractQuantity = () => {
    if (quantity > 1) {
      onChangeQuantity(food._id, quantity - 1);
    }
  };
  return (
    <>
      <div className="flex gap-3">
        <div className="w-[124px] h-[120px] relative rounded-lg overflow-hidden">
          <Image
            className="fill"
            src={food?.image}
            objectFit="cover"
            layout="fill"
            alt={food?.foodName}
          />
        </div>

        <div className="w-[300px] flex flex-col justify-between">
          <div className="flex">
            <div className="w-full">
              <h3 className="font-bold text-red-500">{food?.foodName}</h3>
              <div className="flex flex-wrap">
                <p className="text-xs font-light">{food?.ingredients}</p>
              </div>
            </div>
            <CircleX
              strokeWidth={0.5}
              size={50}
              color="red"
              className="cursor-pointer"
              onClick={() => onRemove(food._id)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button variant="ghost" onClick={subtractQuantity}>
                <Minus />
              </Button>

              <div className="text-lg font-semibold">{quantity}</div>

              <Button
                variant="ghost"
                onClick={() => onChangeQuantity(food._id, quantity + 1)}
              >
                <Plus />
              </Button>
            </div>

            <h4 className="font-bold">{food.price * quantity}₮</h4>
          </div>
        </div>
      </div>
      <SidebarDashLine />
    </>
  );
};
