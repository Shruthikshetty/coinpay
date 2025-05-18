import {z} from 'zod';
import {Patterns} from '~/common/constants/validation-patterns.constants';

// this zod schema is used for the signup form of users
export const customerSignupSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, {message: 'Phone number is required .'})
    .max(10, {message: 'Phone number can not be bigger than 10 letetrs'})
    .refine(
      text => {
        // validate the user entered text to be a valied phone number
        return Patterns.VALID_EMAIL.test(text);
      },
      {
        message: 'Phone number is invalied',
      },
    ),
});

// get the type from the schema
export type ExampleSchema = z.infer<typeof customerSignupSchema>;

// export the default values's of the form
export const defaultSignupDetails: ExampleSchema = {
  phoneNumber: '',
};
