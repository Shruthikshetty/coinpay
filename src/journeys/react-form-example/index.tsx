import React from 'react';
import {Text, View} from 'react-native';
import styles from './index.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '~/components/buttons/Button';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {
  exampleFormDefaultValues,
  ExampleSchema,
  exampleSchema,
} from './react-example.schema';
import {zodResolver} from '@hookform/resolvers/zod';
import FormLabelInput from '~/components/form-controllers/FormLabelInput';

const ReactFormExample = () => {
  // get all the methods from useForm hook
  const methods = useForm({
    mode: 'all',
    resolver: zodResolver(exampleSchema),
    defaultValues: exampleFormDefaultValues,
  });

  // handler to submit the form
  const handleFormSubmit: SubmitHandler<ExampleSchema> = data => {
    console.log(data); // this is the form data that can be used
    methods.reset(); // reset data once submitted
  };

  return (
    <FormProvider {...methods}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>React hook Form example</Text>
        <View style={styles.formContainer}>
          <FormLabelInput<ExampleSchema>
            name={'name'}
            label="Name"
            placeholder="john"
          />
          <FormLabelInput<ExampleSchema>
            name={'email'}
            label="Email"
            placeholder="example@gmail.com"
          />
          <Button
            customStyles={{root: styles.buttonRoot}}
            theme={'Primary'}
            label={'Submit'}
            disabled={!methods.formState.isValid}
            handlePress={methods.handleSubmit(handleFormSubmit)}
          />
        </View>
        {methods.formState.isSubmitSuccessful && (
          <Text style={styles.title}>Form submitted thank you !!</Text>
        )}
      </SafeAreaView>
    </FormProvider>
  );
};

export default ReactFormExample;
