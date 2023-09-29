import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  name: yup.string().required(),
  quantity: yup.number().integer().required(),
  price: yup.number().integer().required(),
  expiry_date: yup.date().required(),
  supermarket_id: yup.string().nullable().required(),
});
