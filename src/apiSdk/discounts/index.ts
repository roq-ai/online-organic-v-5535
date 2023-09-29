import queryString from 'query-string';
import { DiscountInterface, DiscountGetQueryInterface } from 'interfaces/discount';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDiscounts = async (
  query?: DiscountGetQueryInterface,
): Promise<PaginatedInterface<DiscountInterface>> => {
  return fetcher('/api/discounts', {}, query);
};

export const createDiscount = async (discount: DiscountInterface) => {
  return fetcher('/api/discounts', { method: 'POST', body: JSON.stringify(discount) });
};

export const updateDiscountById = async (id: string, discount: DiscountInterface) => {
  return fetcher(`/api/discounts/${id}`, { method: 'PUT', body: JSON.stringify(discount) });
};

export const getDiscountById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/discounts/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteDiscountById = async (id: string) => {
  return fetcher(`/api/discounts/${id}`, { method: 'DELETE' });
};
