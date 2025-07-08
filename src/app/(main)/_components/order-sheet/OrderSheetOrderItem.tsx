import { Badge } from "@/components/ui/badge";
import { Food, FoodItem, Order } from "@/types/types";
import { Map, Soup, Timer } from "lucide-react";

type OrderSheetOrderItemProps = {
  order: Order;
  quantity: number;
};

export const OrderSheetOrderItem = ({ order }: OrderSheetOrderItemProps) => {
  return (
    <div className="space-y-3">
      <div className="flex item-center justify-between">
        <h4 className="font-bold">$26.97 (#20156)</h4>

        <Badge variant="outline" className="border-red-500 rounded-full">
          Delivered
        </Badge>
      </div>

      <div className="flex item-center justify-between">
        <div className="flex item-center gap-2">
          <Soup strokeWidth={1} size={16} />
          <p className="text-muted-foreground text-xs">{order?.foodName}</p>
        </div>
        <p className="text-muted-foreground text-xs">x 1</p>
      </div>

      <div className="flex item-center gap-2">
        <Timer strokeWidth={1} size={16} />
        <p className="text-muted-foreground text-xs">2025.07.11</p>
      </div>

      <div className="flex item-center gap-2">
        <Map strokeWidth={1} size={16} />
        <p className="text-muted-foreground text-xs truncate w-11/12">
          СБД, 12-р хороо, СБД нэгдсэн эмнэлэг 100 айлын гүүрэн гарцны хойд талд
          4д ногоон
        </p>
      </div>
    </div>
  );
};
