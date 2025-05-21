import React from 'react';

import HeaderLayout from '~/components/layouts/HeaderLayout';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';

// This is the form screen for filling in the home address
const AddHomeAddress = () => {
  return (
    <HeaderLayout progressPercent={28}>
      <TitleSubtitle
        title={'Home address'}
        subTitle="This info need's to be accurate with your ID document ."
      />
    </HeaderLayout>
  );
};

export default AddHomeAddress;
