import {z} from 'zod';
import {Patterns} from '~/common/constants/validation-patterns.constants';

// this is a zod schema used in the example form
export const exampleSchema = z.object({
  name: z
    .string()
    .min(1, {message: 'This field is required'})
    .max(15, {message: 'Name can not be more than 15 letters'}),
  email: z
    .string()
    .min(1, {message: 'Email is required'})
    .refine(
      text => {
        // validate the user entered text to be a valid email
        return Patterns.VALID_EMAIL.test(text);
      },
      {message: 'Email not valid'},
    ),
});

// get the type from the schema
export type ExampleSchema = z.infer<typeof exampleSchema>;

// export the default value's of the form
export const exampleFormDefaultValues: ExampleSchema = {
  name: '',
  email: '',
};
