import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OrderSheetOrderItem } from ".";
import { useEffect, useState } from "react";
import { Food } from "@/types/types";

export type Order = {
  _id: string;
  user: string;
  totalPrice: number;
  foodOrderItems: {
    food: Food;
    quantity: number;
    price: string;
    _id: string;
  }[];
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
type OrderResponse = {
  success: boolean;
  foodOrder: Order[];
};

export const OrderSheetOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    const getOrder = async () => {
      const response = await fetch("http://localhost:3800/category/");
      const data = await response.json();
      console.log(data);

      setOrders(data.order);
    };
    getOrder();
  }, []);
  return (
    <Card className="h-[87%]">
      <CardHeader className="p-4 ">
        <CardTitle>Order history</CardTitle>
      </CardHeader>

      <CardContent className="p-4">
        {orders.map((order) => {
          return <OrderSheetOrderItem key={order._id} {...order} />;
        })}
      </CardContent>
    </Card>
  );
};
