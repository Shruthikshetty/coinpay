import React, {useState} from 'react';

import HeaderLayout from '~/components/layouts/HeaderLayout';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import styles from './index.styles';
import {View} from 'react-native';
import FormLabelInput from '~/components/form-controllers/FormLabelInput';
import {CustomerRegisterSchemeType} from '~/navigation/signup/signup-schema';
import DropDown from '~/components/drop-down/DropDown';
import {City, useFetchCity} from '~/services/city-service';
import {useFetchCountry} from '~/services/country-service';

// This is the form screen for filling in the home address
const AddHomeAddress = () => {
  const {data, error} = useFetchCity();
  const {data: countryList} = useFetchCountry();
  const [selectedCity, setSelectedCity] = useState<City | null>();
  console.log(data);
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
        <DropDown
          handleValue={() => {}}
          options={countryList ?? []}
          value={''}
          renderOption={item => item.country}
          placeholder="country"
          label="Country"
        />
        <DropDown<City>
          handleValue={setSelectedCity}
          options={data ?? []}
          value={selectedCity ?? ''}
          placeholder="city"
          renderOption={item => item.city}
          label="City"
        />

        {/* <FormLabelInput<CustomerRegisterSchemeType>
          name={'country'}
          label="Country"
        /> */}
        {/* <FormLabelInput<CustomerRegisterSchemeType>
          name={'city'}
          label="City"
        /> */}
        <FormLabelInput<CustomerRegisterSchemeType>
          name={'pinCode'}
          label="Postcode"
        />
      </View>
    </HeaderLayout>
  );
};

export default AddHomeAddress;
