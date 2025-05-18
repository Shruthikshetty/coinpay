import {z} from 'zod';

// this zod schema is used for the signup form of users
export const customerSignupSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, {message: 'phone number is required .'})
    .max(10, {message: 'Phone number can not be bigger than 10 letetrs'}),
});


