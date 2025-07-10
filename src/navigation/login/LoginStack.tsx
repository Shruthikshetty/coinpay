import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Route } from '~/common/constants/navigation.constants';
import Login from '~/journeys/login';

// create a stack for the login flow
const LoginNavigator = createNativeStackNavigator();

// This is the stack containing the login flow
const LoginStack = () => {
  return (
    <LoginNavigator.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Route.LOGIN}>
      <LoginNavigator.Screen name={Route.LOGIN} component={Login} />
    </LoginNavigator.Navigator>
  );
};

export default LoginStack;
