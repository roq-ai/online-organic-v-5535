const mapping: Record<string, string> = {
  discounts: 'discount',
  inventories: 'inventory',
  orders: 'order',
  'order-items': 'order_item',
  supermarkets: 'supermarket',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
