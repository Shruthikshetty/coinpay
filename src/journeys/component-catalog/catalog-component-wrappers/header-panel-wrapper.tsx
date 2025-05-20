import {Text} from 'react-native';
import HeaderPanel from '~/components/header-panel/HeaderPanel';

// this is the default way to use a header panel
const Default = () => {
  return (
    <HeaderPanel
      handleBackPress={() => {
        console.log('back button pressed');
      }}
    />
  );
};

//use header panel with title and back button
const WithTitle = () => {
  return (
    <HeaderPanel
      handleBackPress={() => {
        console.log('back button pressed');
      }}
      title="Header Panel"
    />
  );
};

// use header panel with title and right component
const WithRightComponent = () => {
  return (
    <HeaderPanel
      handleBackPress={() => {
        console.log('back button pressed');
      }}
      title="Header Panel"
      rightComponent={<Text>Right</Text>}
    />
  );
};

// with only title
const WithOnlyTitle = () => {
  return (
    <HeaderPanel
      handleBackPress={() => {
        console.log('back button pressed');
      }}
      title="Header Panel"
      backButton={false}
    />
  );
};

// export all the variants of header panel to be used in catalog
export const HEADER_PANEL_VARIANTS = {
  Default: () => <Default />,
  WithTitle: () => <WithTitle />,
  WithRightComponent: () => <WithRightComponent />,
  WithOnlyTitle: () => <WithOnlyTitle />,
};
