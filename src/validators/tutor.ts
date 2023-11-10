import { z } from 'zod';

export const ValidatorTutorProps = z.object({
  name: z
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Name should be a string',
    })
    .min(3, 'Min name length is 3')
    .max(100, 'Max name length is 100'),
  phone: z
    .string({
      required_error: 'Phone is required',
      invalid_type_error: 'Phone should be a string',
    })
    .min(3, 'Min phone length is 3')
    .max(12, 'Max name length is 12'),
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email should be a string',
    })
    .email('Email should be a valid email'),
  date_of_birth: z.coerce.date({
    required_error: 'date_of_birth is required',
    invalid_type_error: 'date_of_birth should be a valid date',
  }),
  zipCode: z.string({
    required_error: 'Zip code is required',
    invalid_type_error: 'Zip code should be a string',
  }),
});
