import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OrderSheetOrderItem } from ".";
import { Food, Order } from "@/types/types";

export const OrderSheetOrders = () => {
  return (
    <Card className="h-[87%]">
      <CardHeader className="p-4 ">
        <CardTitle>Order history</CardTitle>
      </CardHeader>

      <CardContent className="p-4">
        <OrderSheetOrderItem />
      </CardContent>
    </Card>
  );
};
