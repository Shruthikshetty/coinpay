import React from 'react';
import styles from './index.styles';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import HeaderLayout from '~/components/layouts/HeaderLayout';

//@TODO inprogress
const AddPersonalInfo = () => {
  return (
    <HeaderLayout progressPercent={28} containerStyles={styles.container}>
      <TitleSubtitle
        title={'Personal Info'}
        subTitle="This info need's to be accurate with your ID document ."
      />
    </HeaderLayout>
  );
};

export default AddPersonalInfo;
