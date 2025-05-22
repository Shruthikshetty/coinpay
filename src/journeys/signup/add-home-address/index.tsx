import React, {useEffect, useState} from 'react';

import HeaderLayout from '~/components/layouts/HeaderLayout';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import styles from './index.styles';
import {View} from 'react-native';
import FormLabelInput from '~/components/form-controllers/FormLabelInput';
import {CustomerRegisterSchemeType} from '~/navigation/signup/signup-schema';
import {useFetchCity} from '~/services/city-service';
import {Country, useFetchCountry} from '~/services/country-service';
import FormDropDown from '~/components/form-controllers/FormDropDown';
import {useFormContext} from 'react-hook-form';

// This is the form screen for filling in the home address
const AddHomeAddress = () => {
  // extract watch from the form context
  const {watch} = useFormContext<CustomerRegisterSchemeType>();
  // hooks used for fetching country and city
  const {data: cityList, mutate: cityMutation} = useFetchCity();
  const {data: countryList} = useFetchCountry();
  // store current value of country
  const country = watch('countryData');
  console.log(JSON.stringify(country, null, 2));
  useEffect(() => {
    // this is used to fetch the cities belonging to a country
    if (!country?.code) {
      return;
    }
    cityMutation(country._id);
  }, [cityMutation, country]);

  return (
    <HeaderLayout
      progressPercent={28}
      containerStyles={styles.container}
      buttonProps={{
        handlePress: () => {},
        label: 'Continue',
        theme: 'Primary',
      }}>
      <TitleSubtitle
        title={'Home address'}
        subTitle="This info need's to be accurate with your ID document ."
      />
      <View style={styles.form}>
        <FormLabelInput<CustomerRegisterSchemeType>
          name={'address'}
          label="Address line"
        />
        <FormDropDown<CustomerRegisterSchemeType, Country>
          options={countryList ?? []}
          name="countryData"
          renderOption={item => item.country}
          placeholder="country"
          label="Country"
        />
        <FormDropDown<CustomerRegisterSchemeType>
          name="city"
          options={cityList?.map(data => data.city) ?? []}
          label="City"
          placeholder="City"
        />
        <FormLabelInput<CustomerRegisterSchemeType>
          name={'pinCode'}
          label="Postcode"
        />
      </View>
    </HeaderLayout>
  );
};

export default AddHomeAddress;
