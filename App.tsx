import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {Provider} from 'react-redux';
import {store} from './src/state-management/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// initialize queryclient
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <View style={StyleSheet.absoluteFill}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer>
              <RootNavigation />
            </NavigationContainer>
          </QueryClientProvider>
        </Provider>
        {/* status bar  */}
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      </View>
    </SafeAreaProvider>
  );
}

export default App;
