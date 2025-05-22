import {z} from 'zod';
import {Patterns} from '~/common/constants/validation-patterns.constants';

//@TODO validations to be cross verified with backend
// this zod schema is used for the signup form of users
export const customerRegisterSchema = z
  .object({
    phoneNumber: z
      .string()
      .min(1, {message: 'Phone number is required .'})
      .max(10, {message: 'Phone number can not be bigger than 10 letters'})
      .refine(
        text => {
          // validate the user entered text to be a valid phone number
          return Patterns.PHONE_NUMBER.test(text);
        },
        {
          message: 'Phone number is invalid',
        },
      ),
    password: z
      .string()
      .min(4, {message: 'Password should be at least 4 characters long'})
      .max(10, {message: 'Password scan not be longer than 10 characters'}),
    confirmPassword: z
      .string()
      .min(4, {message: 'Confirm password can not be empty'}),
    email: z
      .string()
      .min(1, {message: 'Email is required'})
      .refine(
        text => {
          // check if the format is a valid email format
          return Patterns.VALID_EMAIL.test(text);
        },
        {
          message: 'Invalid email please recheck',
        },
      ),
    address: z
      .string()
      .min(1, {message: 'Address is required'})
      .max(50, {message: 'Address can not be more than 50 char in length'}),
    city: z
      .string()
      .min(1, {message: 'City is required'})
      .refine(text => Patterns.ONLY_CHARACTERS.test(text), {
        message: 'Invalid city',
      }),
    countryData: z.object({
      country: z
        .string()
        .min(1, {message: 'Country is required'})
        .refine(text => Patterns.ONLY_CHARACTERS_AND_SPACES.test(text), {
          message: 'Invalid Country',
        }),
      code: z.string(),
      phoneCode: z.string(),
      _id: z.string(),
    }),
    pinCode: z
      .string()
      .length(6, {message: 'Pin code must be exactly 6 digits'})
      .refine(val => Patterns.PIN_CODE.test(val), {
        message: 'Pin code must be a 6-digit number',
      }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

// get the type from the schema
export type CustomerRegisterSchemeType = z.infer<typeof customerRegisterSchema>;

// export the default values's of the form
export const defaultSignupDetails: CustomerRegisterSchemeType = {
  phoneNumber: '',
  password: '',
  confirmPassword: '',
  email: '',
  address: '',
  city: '',
  country: '',
  pinCode: '',
};
