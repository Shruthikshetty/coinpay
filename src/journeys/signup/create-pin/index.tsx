import React from 'react';
import HeaderLayout from '~/components/layouts/HeaderLayout';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';

const CreatePin = () => {
  return (
    <HeaderLayout progressPercent={80}>
      <TitleSubtitle
        title="Create pin"
        subTitle="Remember this pin to log into the app"
      />
    </HeaderLayout>
  );
};

export default CreatePin;
