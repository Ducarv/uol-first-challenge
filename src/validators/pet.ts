import { z } from 'zod';

export const ValidatorPetProps = z.object({
  name: z
    .string({
      required_error: 'The pet name is required.',
      invalid_type_error: 'The pet name should be a string.',
    })
    .min(3, 'Min name length is 3')
    .max(100, 'Max name length is 100'),
  species: z
    .string({
      required_error: 'The pet species is required.',
      invalid_type_error: 'The pet species should be a string.',
    })
    .min(3, 'Min specie length is 3')
    .max(30, 'Max specie length is 20'),
  carry: z
    .string({
      required_error: 'The pet carry is required.',
      invalid_type_error: 'The pet carry should be a string.',
    })
    .min(1, 'Min carry length is 3')
    .max(10, 'Max carry length is 20'),
  weight: z.number({
    required_error: 'The pet weight is required.',
    invalid_type_error: 'The pet weight should be a number.',
  }),
  date_of_birth: z.coerce.date({
    required_error: 'The pet date of birth is required.',
    invalid_type_error: 'The pet date of birth should be a valid date.',
  }),
});
