import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {Stack} from '~/common/constants/navigation.constants';
import {useNavigation} from '~/common/hooks/use-navigation'; // custom typed navigation hook
import styles from './index.styles';
import {SafeAreaView} from 'react-native-safe-area-context';

// App landing screen
const AppLanding = () => {
  const navigation = useNavigation();

  // List of screen routes to navigate to
  const screens = [
    {name: 'Purpose Screen', route: Stack.PURPOSE_SCREEN},
    {name: 'Api call example', route: Stack.API_CALL_EXAMPLE},
    {
      name: 'Api state management using\n tanstack quey',
      route: Stack.QUERY_EXAMPLE,
    },
    {name: 'Redux example', route: Stack.REDUX_EXAMPLE},
    {name: 'Component catalog', route: Stack.COMPONENT_CATALOG},
    {name: 'React Form', route: Stack.REACT_FORM_EXAMPLE},
    {name: 'Intenationalization', route: Stack.INTERNATIONALIZATION_EXAMPLE},
    {name: 'Send Stack', route: Stack.SEND_STACK},
    // Add more screens here
  ];

  // Render each link as a touchable item
  const renderItem = ({item}: {item: {name: string; route: string}}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(item.route)} // navigate on to screen
      style={styles.linkContainer}>
      <Text style={styles.linkStyle}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.root}>
      {/* FlatList to render all the screen links */}
      <FlatList
        data={screens}
        keyExtractor={item => item.route}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default AppLanding;
