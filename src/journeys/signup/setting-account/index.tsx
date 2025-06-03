import React from 'react';
import {FlatList, Image, View} from 'react-native';
import HeaderLayout from '~/components/layouts/HeaderLayout';
import styles from './index.styles';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';

import ProgressItem from '~/components/progress-item/ProgressItem';

// this is the screen where the account is registered
const AccountSetup = () => {
  // @TODO move to screen constants
  const progressData = [
    {
      index: 1,
      text: 'Phone Verified',
      loading: false,
    },
    {
      index: 2,
      text: 'Checking up document ID',
      loading: true,
    },
    {
      index: 3,
      text: 'Verifying Photo',
      loading: true,
    },
  ];

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
