import queryString from 'query-string';
import { SupermarketInterface, SupermarketGetQueryInterface } from 'interfaces/supermarket';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSupermarkets = async (
  query?: SupermarketGetQueryInterface,
): Promise<PaginatedInterface<SupermarketInterface>> => {
  return fetcher('/api/supermarkets', {}, query);
};

export const createSupermarket = async (supermarket: SupermarketInterface) => {
  return fetcher('/api/supermarkets', { method: 'POST', body: JSON.stringify(supermarket) });
};

export const updateSupermarketById = async (id: string, supermarket: SupermarketInterface) => {
  return fetcher(`/api/supermarkets/${id}`, { method: 'PUT', body: JSON.stringify(supermarket) });
};

export const getSupermarketById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/supermarkets/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteSupermarketById = async (id: string) => {
  return fetcher(`/api/supermarkets/${id}`, { method: 'DELETE' });
};
