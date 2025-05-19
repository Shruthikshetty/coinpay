import {z} from 'zod';
import {Patterns} from '~/common/constants/validation-patterns.constants';

// this zod schema is used for the signup form of users
export const customerRegisterSchema = z
  .object({
    phoneNumber: z
      .string()
      .min(1, {message: 'Phone number is required .'})
      .max(10, {message: 'Phone number can not be bigger than 10 letetrs'})
      .refine(
        text => {
          // validate the user entered text to be a valied phone number
          return Patterns.PHONE_NUMBER.test(text);
        },
        {
          message: 'Phone number is invalied',
        },
      ),
    password: z
      .string()
      .min(4, {message: 'Password should be at least 4 characters long'})
      .max(10, {message: 'Password scan not be longer than 10 characters'}),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

// get the type from the schema
export type CustomerregisterSchemeType = z.infer<typeof customerRegisterSchema>;

// export the default values's of the form
export const defaultSignupDetails: CustomerregisterSchemeType = {
  phoneNumber: '',
  password: '',
  confirmPassword: '',
};
