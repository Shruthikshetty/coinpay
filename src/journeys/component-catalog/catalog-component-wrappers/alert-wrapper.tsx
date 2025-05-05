/* eslint-disable react-native/no-inline-styles */
/**
 * This file contains all theme + variant combinations of alerts
 * for use in catalog/demo environments.
 */

import {ScrollView, Text, View} from 'react-native';
import {useAlert} from '~/common/hooks/use-alert';
import Button from '~/components/buttons/Button';

/**
 * A reusable button component that triggers an alert with given message, theme, and variant.
 * this is only created to be used in this file only
 */
const AlertButton = ({
  label,
  theme,
  variant,
  message,
}: {
  label: string;
  theme: any;
  variant: any;
  message: string;
}) => {
  const {alert} = useAlert(theme, variant);

  return (
    <Button theme="Primary" label={label} handlePress={() => alert(message)} />
  );
};

// Individual alert demo components for each theme + variant combination

/** Primary theme - Light variant */
const AlertPrimaryLight = () => (
  <AlertButton
    label="Primary Light"
    theme="Primary"
    variant="light"
    message="Primary Light Alert"
  />
);

/** Primary theme - Dark variant */
const AlertPrimaryDark = () => (
  <AlertButton
    label="Primary Dark"
    theme="Primary"
    variant="dark"
    message="Primary Dark Alert"
  />
);

/** Error theme - Light variant */
const AlertErrorLight = () => (
  <AlertButton
    label="Error Light"
    theme="Error"
    variant="light"
    message="Error Light Alert"
  />
);

/** Error theme - Dark variant */
const AlertErrorDark = () => (
  <AlertButton
    label="Error Dark"
    theme="Error"
    variant="dark"
    message="Error Dark Alert"
  />
);

/** Success theme - Light variant */
const AlertSuccessLight = () => (
  <AlertButton
    label="Success Light"
    theme="Success"
    variant="light"
    message="Success Light Alert"
  />
);

/** Success theme - Dark variant */
const AlertSuccessDark = () => (
  <AlertButton
    label="Success Dark"
    theme="Success"
    variant="dark"
    message="Success Dark Alert"
  />
);

/** Secondary theme - Light variant */
const AlertSecondaryLight = () => (
  <AlertButton
    label="Secondary Light"
    theme="Secondary"
    variant="light"
    message="Secondary Light Alert"
  />
);

/** Secondary theme - Dark variant */
const AlertSecondaryDark = () => (
  <AlertButton
    label="Secondary Dark"
    theme="Secondary"
    variant="dark"
    message="Secondary Dark Alert"
  />
);

/**
 * Demo component to render all alert combinations for visual testing.
 */
const AlertVariantsDemo = () => {
  // this can be used if we have to use diff alert types in a single screen
  const {changeAlert} = useAlert('Primary', 'light');
  return (
    <ScrollView>
      <View style={{gap: 10}}>
        <Button
          theme="Primary"
          varient="Border"
          label={'Pimary light alert'}
          handlePress={() => {
            changeAlert('Primary light alert', 'Primary', 'light');
          }}
        />
        <Button
          theme="Primary"
          varient="Border"
          label={'Pimary dark alert'}
          handlePress={() => {
            changeAlert('Primary dark alert', 'Primary', 'dark');
          }}
        />
        <Button
          theme="Primary"
          varient="Border"
          label={'Error dark alert'}
          handlePress={() => {
            changeAlert('Error dark alert', 'Error', 'dark');
          }}
        />
        <Button
          theme="Primary"
          varient="Border"
          label={'Success dark alert'}
          handlePress={() => {
            changeAlert('Success dark alert', 'Success', 'dark');
          }}
        />
        <Button
          theme="Primary"
          varient="Border"
          label={'Secondary dark alert'}
          handlePress={() => {
            changeAlert('Secondary dark alert', 'Secondary', 'dark');
          }}
        />
        <Text>etc....</Text>
      </View>
    </ScrollView>
  );
};

/**
 * Map of all alert variant components to be used in the catalog or storybook.
 */
export const ALERT_VARIANTS = {
  PrimaryLight: () => <AlertPrimaryLight />,
  PrimaryDark: () => <AlertPrimaryDark />,
  ErrorLight: () => <AlertErrorLight />,
  ErrorDark: () => <AlertErrorDark />,
  SuccessLight: () => <AlertSuccessLight />,
  SuccessDark: () => <AlertSuccessDark />,
  SecondaryLight: () => <AlertSecondaryLight />,
  SecondaryDark: () => <AlertSecondaryDark />,
  All: () => <AlertVariantsDemo />,
};
