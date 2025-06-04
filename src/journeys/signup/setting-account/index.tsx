import React, {useEffect, useState} from 'react';
import {FlatList, Image, View} from 'react-native';
import HeaderLayout from '~/components/layouts/HeaderLayout';
import styles from './index.styles';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';

import ProgressItem from '~/components/progress-item/ProgressItem';
import {ACCOUNT_SETUP_INITIAL_PROGRESS_DATA} from '~/common/constants/screen.constants';
import {useFormContext} from 'react-hook-form';
import {CustomerRegisterSchemeType} from '~/navigation/signup/signup-schema';
import {useAddCustomer} from '~/services/customer-service';
import {useAlert} from '~/common/hooks/use-alert';
import {AxiosError} from 'axios';
import {ApiValidationError} from '~/types/types';
import {useAddAuth} from '~/services/auth-service';
import {useNavigation} from '~/common/hooks/use-navigation';
import {Route, Stack} from '~/common/constants/navigation.constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

// this is the screen where the account is registered
const AccountSetup = () => {
  // holed's how much progress is made
  const [progressData, setProgressData] = useState(
    ACCOUNT_SETUP_INITIAL_PROGRESS_DATA,
  );

  const navigation = useNavigation();

  //function to set progress true for the given index
  const setProgressLoading = (setIndex: number) => {
    setProgressData(s =>
      s.map((item, index) =>
        index === setIndex ? {...item, loading: false} : item,
      ),
    );
  };

  // take out alert for errors
  const {alert} = useAlert('Error', 'light', 2000);
  // add customer useMutation
  const {mutate: addCustomerMutate} = useAddCustomer();
  // auth mutation
  const {mutate: authMutation} = useAddAuth();

  const {getValues} = useFormContext<CustomerRegisterSchemeType>();
  // this will handler the api call to set up account and add auth
  useEffect(() => {
    // async function to extract data
    const handleApiCalls = async () => {
      // first extract the form data
      const formData = await getValues();
      // extract data required to add customer
      const {countryData, password, pin, ...addCustomerReq} = formData;

      // add customer
      addCustomerMutate(
        {
          ...addCustomerReq,
          country: countryData.country,
          panNumber: 'PQRS57', // @TODO this is yet to be implemented
        },
        {
          onError: (error: AxiosError<ApiValidationError>) => {
            alert(
              error.response?.data?.message ||
                error.response?.data?.error?.[0]?.msg ||
                'Failed to add customer',
            );
            //navigate back
            navigation.replace(Stack.ONBOARDING_STACK);
          },
          onSuccess: data => {
            // turn of loading for adding customer
            setProgressLoading(1);
            // next call auth api to add user pass and pin
            authMutation(
              {
                customerRefId: data._id,
                password: password,
                pin: pin,
              },
              {
                onError: () => {
                  alert('Failed to add auth');
                  //navigate back
                  navigation.replace(Stack.ONBOARDING_STACK);
                },
                onSuccess: () => {
                  // turn of loading for adding customer
                  setProgressLoading(1);
                  //store the customer ref id in async storage
                  AsyncStorage.setItem('customerRefId', data._id);
                  // navigate to welcome Screen
                  navigation.navigate(Route.Welcome);
                },
              },
            );
          },
        },
      );
    };
    // call the async function
    handleApiCalls();
  }, [addCustomerMutate, alert, authMutation, getValues, navigation]);

  // separator line for progress items
  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <HeaderLayout progressPercent={90} containerStyles={styles.root}>
      {/* image  */}
      <Image source={require('../../../../assets/account-setup.png')} />
      <TitleSubtitle
        customStyles={{
          root: styles.root,
          subtitle: styles.titleCenter,
          title: styles.titleCenter,
        }}
        title={'Setting up\nyour account'}
        subTitle="We are analyzing your data to verify"
      />
      <FlatList
        data={progressData}
        contentContainerStyle={styles.progressItemsContainer}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={({index}) => index.toString()}
        renderItem={({item}) => (
          <ProgressItem
            text={item.text}
            itemNumber={item.index}
            isLoading={item.loading}
          />
        )}
      />
    </HeaderLayout>
  );
};

export default AccountSetup;
