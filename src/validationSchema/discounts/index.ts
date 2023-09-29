import * as yup from 'yup';

export const discountValidationSchema = yup.object().shape({
  discount_percentage: yup.number().integer().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  inventory_id: yup.string().nullable().required(),
});
