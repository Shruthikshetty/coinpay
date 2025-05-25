import React from 'react';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';

// Example variant using the TitleSubtitle component
const WithSubtitle = () => {
  return <TitleSubtitle title="Welcome" subTitle="Please enjoy your stay" />;
};

// with only title
const WithTitle = () => {
  return <TitleSubtitle title="Welcome Home" />;
};

// passing custom styles
const WithCustomStyles = () => {
  return (
    <TitleSubtitle
      title="Custom Title"
      subTitle="Styled subtitle"
      customStyles={{
        root: {padding: 10, backgroundColor: '#eef'},
        title: {fontSize: 20, color: 'navy'},
        subtitle: {fontSize: 16, color: 'gray'},
      }}
    />
  );
};

// Export all variations
export const TITLE_SUBTITLE_ALL_VARIANTS = {
  WithTitle: () => <WithTitle />,
  WithSubtitle: () => <WithSubtitle />,
  WithCustomStyles: () => <WithCustomStyles />,
};
