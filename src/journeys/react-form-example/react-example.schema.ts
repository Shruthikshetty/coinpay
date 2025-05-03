import {z} from 'zod';
import {Patters} from '~/common/constants/validation-patters.constants';

// this is a zod schema used in the example form
export const exampleSchema = z.object({
  name: z
    .string()
    .min(1, {message: 'This feild is required'})
    .max(15, {message: 'Name can not be more than 15 letters'}),
  email: z
    .string()
    .min(1, {message: 'Email is required'})
    .refine(
      text => {
        // validate the user entered text to be a valied email
        return Patters.VALID_EMAIL.test(text);
      },
      {message: 'Email not valied'},
    ),
});

// get the type from the schema
export type ExampleSchema = z.infer<typeof exampleSchema>;

// export the default value's of the form
export const exampleFormDefaultValues: ExampleSchema = {
  name: '',
  email: '',
};
