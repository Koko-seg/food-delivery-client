import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OrderSheetEmptyCard } from "./OrderSheetEmptyCard";
import { OrderSheetFoodItem } from "./OrderSheetFoodItem";
import { Category, Food, FoodItem } from "@/types/types";

export const cartData = [
  {
    food: {
      _id: 1,
      foodName: "",
      price: "",
      image: "",
      ingredients: "",
      categoryId: {
        _id: "1",
        categoryName: "categoryName",
        createdAt: "2025-06-27T17:00:00+08:00",
        updatedAt: "2025-06-22T17:00:00+08:00",
      },
    },
    quantity: 1,
  },
];

// type OrderSheetCartProps = {
//   food: FoodItem;
// };

export const OrderSheetCart = () => {
  const renderFoodCard = () => {
    if (cartData?.length) {
      return cartData?.map((item) => {
        return (
          <OrderSheetFoodItem
            key={item.food._id}
            food={item.food}
            quantity={item.quantity}
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
