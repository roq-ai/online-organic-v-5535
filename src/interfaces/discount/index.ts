import { InventoryInterface } from 'interfaces/inventory';
import { GetQueryInterface } from 'interfaces';

export interface DiscountInterface {
  id?: string;
  discount_percentage: number;
  start_date: any;
  end_date: any;
  inventory_id: string;
  created_at?: any;
  updated_at?: any;

  inventory?: InventoryInterface;
  _count?: {};
}

export interface DiscountGetQueryInterface extends GetQueryInterface {
  id?: string;
  inventory_id?: string;
}
