import { DiscountInterface } from 'interfaces/discount';
import { OrderItemInterface } from 'interfaces/order-item';
import { SupermarketInterface } from 'interfaces/supermarket';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  name: string;
  quantity: number;
  price: number;
  expiry_date: any;
  supermarket_id: string;
  created_at?: any;
  updated_at?: any;
  discount?: DiscountInterface[];
  order_item?: OrderItemInterface[];
  supermarket?: SupermarketInterface;
  _count?: {
    discount?: number;
    order_item?: number;
  };
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  supermarket_id?: string;
}
