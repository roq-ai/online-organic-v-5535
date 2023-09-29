import { OrderInterface } from 'interfaces/order';
import { InventoryInterface } from 'interfaces/inventory';
import { GetQueryInterface } from 'interfaces';

export interface OrderItemInterface {
  id?: string;
  quantity: number;
  price: number;
  order_id: string;
  inventory_id: string;
  created_at?: any;
  updated_at?: any;

  order?: OrderInterface;
  inventory?: InventoryInterface;
  _count?: {};
}

export interface OrderItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  order_id?: string;
  inventory_id?: string;
}
