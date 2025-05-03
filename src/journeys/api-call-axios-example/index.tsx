import axios, {AxiosError} from 'axios';
import {useEffect, useState} from 'react';
import {Text, ScrollView, ActivityIndicator} from 'react-native';
import styles from './index.styles';
import ErrorPopup from '~/components/error-popup/ErrorPopup';
import {useNavigation} from '~/common/hooks/use-navigation';
import {Stack} from '~/common/constants/navigation.constants';
import {colors} from '~/common/constants/colors.constants';
import {SafeAreaView} from 'react-native-safe-area-context';

// type of the data we receive from the dummy api
type PlaceHolderType = {id: string; title: string};

// dummy api
const DummyUrl = 'https://jsonplaceholder.typicode.com/todos';

// example showing how to fetch data using axios
const ApiCallExample = () => {
  const [placeHolderData, setPlaceHolderData] = useState<PlaceHolderType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError>();
  const navigate = useNavigation();
  // handle data fetching at mount
  useEffect(() => {
    // logics are to be moved into service files
    // keeping here since its a example file
    setLoading(true);
    axios
      .get(DummyUrl)
      .then(res => {
        // handle the api data received
        setPlaceHolderData(res.data);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        // handle the error case
        setError(err);
        setLoading(false);
      });
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.header}>Api Call example</Text>
        {loading && <ActivityIndicator size={40} color={colors.blue500} />}
        {placeHolderData?.map((item, index) => (
          <Text key={item.id} style={styles.title}>
            {index + 1}. {item.title}
          </Text>
        ))}
      </ScrollView>
      <ErrorPopup
        title={'Error!'}
        description={error?.message ?? 'Api call failed'}
        code={error?.name}
        handleOkay={() => {
          // navigate to main screen on error
          navigate.navigate(Stack.APP_LANDING);
        }}
        modal={{
          visible: !!error,
          hide: () => {
            setError(undefined);
          },
        }}
      />
    </SafeAreaView>
  );
};

export default ApiCallExample;
