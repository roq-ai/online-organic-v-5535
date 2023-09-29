import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  order_date: yup.date().required(),
  delivery_date: yup.date().nullable(),
  total_price: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  supermarket_id: yup.string().nullable().required(),
});
