import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import styles from './index.styles';
import {useMutation, useQuery} from '@tanstack/react-query';
import axios, {AxiosResponse} from 'axios';
import {Endpoints} from '~/common/constants/endpoints.constants';
import {colors} from '~/common/constants/colors.constants';
import ErrorPopup from '~/components/error-popup/ErrorPopup';
import {useNavigation} from '~/common/hooks/use-navigation';
import {Stack} from '~/common/constants/navigation.constants';
import LabelInput from '~/components/label-input/LabelInput';
import {useModal} from '~/common/hooks/use-model';
import Button from '~/components/buttons/Button';
import {SafeAreaView} from 'react-native-safe-area-context';

type PurposeOptionType = {
  key: string;
  title: string;
  subtitle: string;
  image: string;
};

// this is user entered data stored in state
type AddPurposeDataType = Pick<PurposeOptionType, 'title' | 'subtitle'>;

//simple screen showing how to use tanstack query for state management
const QueryExample = () => {
  // user entered data to add a new item to purpose options
  const [addPurposeData, setAddPurposeData] = useState<AddPurposeDataType>({
    title: '',
    subtitle: '',
  });

  // state to handle error modal state
  const errorModal = useModal();

  const navigation = useNavigation();
  // using tanstack query to fetch data fom api
  // this logic is to be moved to service file
  const {data, isLoading, isError, error, refetch} = useQuery<
    AxiosResponse<any, any>,
    Error,
    AxiosResponse<PurposeOptionType[]>
  >({
    queryKey: ['purposeSelection'],
    queryFn: () => axios.get(Endpoints.PURPOSE_OPTIONS).then(res => res),
  });

  //to set error modal
  useEffect(() => {
    if (isError && error) {
      errorModal.show();
    }
  }, [isError, error, errorModal]);

  // mutation to post a new option
  // this logic is to be moved to service file
  // need to handle errors from this as well
  const {mutate} = useMutation({
    mutationKey: ['purposeAdd'],
    mutationFn: (req: PurposeOptionType) =>
      axios.post(Endpoints.PURPOSE_OPTIONS, req),
  });

  // function to add a new item to purpose options onPress of button
  // we use the mutation from above useMutation Query
  const handleAddPurposeOptions = () => {
    mutate(
      {
        key: `${addPurposeData.title}_${addPurposeData.subtitle.split(' ')[0]}`,
        title: addPurposeData.title,
        subtitle: addPurposeData.subtitle,
        image: 'receipt_icon', // this is hardcoded since its just a example
      },
      {
        onSuccess: () => {
          refetch(); // refetch the options
        },
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>QueryExample Component</Text>
      <Text style={styles.subHeader}>GET API (QUERY)</Text>
      <View>
        {isLoading ? (
          <ActivityIndicator color={colors.blue500} />
        ) : (
          data?.data.map((item, index) => (
            <View key={item.key}>
              <Text>{index + 1} :- </Text>
              <View style={styles.purposeInfoContainer}>
                <Text>{item.title}</Text>
                <Text>{item.subtitle}</Text>
              </View>
            </View>
          ))
        )}
      </View>
      {/* mutation  part  */}
      <Text style={styles.subHeader}>POST UPDATE or DELETE (MUTATE)</Text>

      {/* these a simple form for adding a new item to purpose options */}
      <LabelInput
        label="Title"
        placeholder="title"
        value={addPurposeData.title}
        handleChange={value => {
          setAddPurposeData(s => ({...s, title: value}));
        }}
      />
      <LabelInput
        label="Subtitle"
        placeholder="subtitle"
        value={addPurposeData.subtitle}
        handleChange={value => {
          setAddPurposeData(s => ({...s, subtitle: value}));
        }}
      />
      <Button
        customStyles={{root: styles.button}}
        disabled={!Object.values(addPurposeData).every(value => Boolean(value))} // check if user has entered all the required fields
        theme={'Primary'}
        label={'Add new purpose'}
        handlePress={handleAddPurposeOptions}
        variant="Border"
      />
      {/* ------ end of the form ------ */}

      {/* Error pop up */}
      <ErrorPopup
        title={'Error!'}
        description={error?.message ?? 'Api call failed'}
        code={error?.name}
        handleOkay={() => {
          // navigate to main screen on error
          navigation.navigate(Stack.APP_LANDING);
        }}
        modal={errorModal}
      />
    </SafeAreaView>
  );
};

export default QueryExample;
