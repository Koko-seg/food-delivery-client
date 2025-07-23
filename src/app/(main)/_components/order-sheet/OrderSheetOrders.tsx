import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OrderSheetOrderItem } from ".";
import { useEffect, useState } from "react";
import { Order } from "@/types/types";

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
        <OrderSheetOrderItem key={order._id} {...order} />
      </CardContent>
    </Card>
  );
};
