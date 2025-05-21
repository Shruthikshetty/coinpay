import React from 'react';
import {View, Text} from 'react-native';
import styles from './index.styles';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import HeaderLayout from '~/components/layouts/HeaderLayout';

const AddPersonalInfo = () => {
  return (
    <HeaderLayout progressPercent={28}>
      <TitleSubtitle
        title={'Personal Info'}
        subTitle="This info need's to be accurate with your ID document ."
      />
    </HeaderLayout>
  );
};

export default AddPersonalInfo;
