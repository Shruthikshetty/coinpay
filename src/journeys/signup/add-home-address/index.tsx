import React, {useEffect} from 'react';

import HeaderLayout from '~/components/layouts/HeaderLayout';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import styles from './index.styles';
import {View} from 'react-native';
import FormLabelInput from '~/components/form-controllers/FormLabelInput';
import {CustomerRegisterSchemeType} from '~/navigation/signup/signup-schema';
import {useFetchCity} from '~/services/city-service';
import FormDropDown from '~/components/form-controllers/FormDropDown';
import {useFormContext} from 'react-hook-form';
import {useAlert} from '~/common/hooks/use-alert';
import FormCountryDropDown from '~/components/form-controllers/FormCountryDropDown';
import {useNavigation} from '~/common/hooks/use-navigation';
import {Route} from '~/common/constants/navigation.constants';

// This is the form screen for filling in the home address
const AddHomeAddress = () => {
  const navigation = useNavigation();
  // extract watch from the form context
  const {
    watch,
    trigger,
    formState: {errors},
  } = useFormContext<CustomerRegisterSchemeType>();
  // hooks used for fetching country and city
  const {
    data: cityList,
    mutate: cityMutation,
    isError: cityFetchError,
  } = useFetchCity();
  // store current value of country
  const country = watch('countryData');

  const {alert} = useAlert('Error', 'light');

  useEffect(() => {
    // this is used to fetch the cities belonging to a country
    if (!country?.code) {
      return;
    }
    cityMutation(country._id);
  }, [cityMutation, country]);

  // handle errors
  useEffect(() => {
    // in case city was not fetched
    if (cityFetchError) {
      alert('failed to fetch city try after sometime .');
    }
  }, [alert, cityFetchError]);

  // check if all the fields are valid and navigate
  const handleContinue = async () => {
    const isValid = await trigger([
      'address',
      'city',
      'countryData',
      'pinCode',
    ]);
    if (isValid) {
      // navigate to next screen
      navigation.navigate(Route.ADD_PERSONAL_INFO);
    }
    // no actions to be done if not valid
  };

  return (
    <HeaderLayout
      progressPercent={28}
      containerStyles={styles.container}
      buttonProps={{
        handlePress: handleContinue,
        disabled:
          !!errors.countryData ||
          !!errors.city ||
          !!errors.pinCode ||
          !!errors.address,
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
          placeholder="Address"
        />
        <FormCountryDropDown<CustomerRegisterSchemeType> name="countryData" />
        <FormDropDown<CustomerRegisterSchemeType>
          name="city"
          options={cityList?.map(data => data.city) ?? []}
          label="City"
          placeholder="City"
          emptyHandlerMessage="Sorry no city for this country is serviceable"
        />
        <FormLabelInput<CustomerRegisterSchemeType>
          name={'pinCode'}
          label="Postcode"
          placeholder={'Ex. 000000'}
        />
      </View>
    </HeaderLayout>
  );
};

export default AddHomeAddress;
