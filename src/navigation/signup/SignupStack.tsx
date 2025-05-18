import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {createContext, useContext, useState} from 'react';
import {Route} from '~/common/constants/navigation.constants';
import SignUpLanding from '~/journeys/signup';

//types for customer
type Customer = {
  phoneNumber: string;
  name: string;
  userName: string;
  email: string;
  panNumber: string;
  address: string;
  city: string;
  country: string;
  dob: string;
  pinCode: string;
  profileImage: string;
};

//types of context
type SignupContextType = {
  customerDetails: Customer;
  handleSetCustomerDetails: (data: Partial<Customer>) => void;
};

// initaialize the navigator
const SignupNavigator = createNativeStackNavigator();

// create a context for sign up this will hold all the user entered data for opening an account
const SignupContext = createContext<SignupContextType>(null!);

// export the context for use as custom hook
export const useSignupContext = () => {
  // return the sign up context
  return useContext(SignupContext);
};

// this stack contains all the scrren in sign up flow
const SignupStack = () => {
  //state to store customer details
  //the initial values are also defined here
  const [customerDetails, setCustomerDetails] = useState<Customer>({
    phoneNumber: '',
    name: '',
    userName: '',
    email: '',
    panNumber: '',
    address: '',
    city: '',
    country: '',
    dob: '',
    pinCode: '',
    profileImage: '',
  });

  // this is used to update the customer details partially
  const handleSetCustomerDetails = (data: Partial<Customer>) => {
    setCustomerDetails(s => ({...s, ...data}));
  };

  return (
    <SignupContext.Provider value={{customerDetails, handleSetCustomerDetails}}>
      <SignupNavigator.Navigator screenOptions={{headerShown: false}}>
        <SignupNavigator.Screen
          name={Route.SIGNUP_LANDING}
          component={SignUpLanding}
        />
      </SignupNavigator.Navigator>
    </SignupContext.Provider>
  );
};

export default SignupStack;
