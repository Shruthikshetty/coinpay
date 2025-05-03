import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Stack} from '~/common/constants/navigation.constants';
import AppLanding from '~/journeys/landing';
import PurposeSelect from '~/journeys/purpose-selection';
import ApiCallExample from '~/journeys/api-call-axios-example/index';
import QueryExample from '~/journeys/tanstack-query-example';
import ReduxExample from '~/journeys/redux-example';
import ComponentCatalogScreen from '~/journeys/component-catalog/index';
import AlertProvider from '~/components/alert/AlertProvider';
import ReactFormExample from '~/journeys/react-form-example';
import InternationalizationExample from '~/journeys/internationalization-example';

const RootStack = createNativeStackNavigator();

/**
 * This is the main navigator of the app
 * All the initial routes go here
 * @returns JSX Element
 */
const RootNavigation = () => {
  return (
    <AlertProvider>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name={Stack.APP_LANDING} component={AppLanding} />
        <RootStack.Screen
          name={Stack.PURPOSE_SCREEN}
          component={PurposeSelect}
        />
        <RootStack.Screen
          name={Stack.API_CALL_EXAMPLE}
          component={ApiCallExample}
        />
        <RootStack.Screen name={Stack.QUERY_EXAMPLE} component={QueryExample} />
        <RootStack.Screen name={Stack.REDUX_EXAMPLE} component={ReduxExample} />
        <RootStack.Screen
          name={Stack.COMPONENT_CATALOG}
          component={ComponentCatalogScreen}
        />
        <RootStack.Screen
          name={Stack.REACT_FORM_EXAMPLE}
          component={ReactFormExample}
        />
        <RootStack.Screen
          name={Stack.INTERNATIONALIZATION_EXAMPLE}
          component={InternationalizationExample}
        />
      </RootStack.Navigator>
    </AlertProvider>
  );
};

export default RootNavigation;
