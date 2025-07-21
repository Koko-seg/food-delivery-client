import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OrderSheetEmptyCard } from "./OrderSheetEmptyCard";
import { OrderSheetFoodItem } from "./OrderSheetFoodItem";
import { Category, Food, FoodItem } from "@/types/types";
import { useContext } from "react";
import { FoodCartContext } from "@/providers/FoodCart";

export const OrderSheetCart = () => {
  const { foodCart, setFoodCart } = useContext(FoodCartContext);
  console.log("foodCart", foodCart);

  const handleRemoveFromCart = (id: string) => {
    setFoodCart((prev) => prev.filter((item) => item.food._id !== id));
  };
  const handleChangeQuantity = (id: string, newQuantity: number) => {
    setFoodCart((prev) =>
      prev.map((item) =>
        item.food._id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const renderFoodCard = () => {
    if (foodCart?.length) {
      return foodCart?.map((item) => {
        return (
          <OrderSheetFoodItem
            key={item.food._id}
            food={item.food}
            quantity={item.quantity}
            onRemove={handleRemoveFromCart}
            onChangeQuantity={handleChangeQuantity}
          />
        );
      });
    }
    return <OrderSheetEmptyCard />;
  };

  return (
    <Card className="h-[400px] overflow-hidden pb-4">
      <CardHeader className="p-4">
        <CardTitle>My cart</CardTitle>
      </CardHeader>

      <CardContent className="h-full p-4 pb-10 overflow-scroll">
        {renderFoodCard()}
      </CardContent>
    </Card>
  );
};
