/* eslint-disable react-native/no-inline-styles */
/**
 * This file contains catalog/demo variants of the Button component.
 */

import React from 'react';
import {ScrollView, View} from 'react-native';
import Button from '~/components/buttons/Button';

/** Primary themed button */
const ButtonPrimary = () => (
  <Button
    theme="Primary"
    label="Primary"
    handlePress={() => console.log('Primary button clicked')}
  />
);

/** Error themed button (used as secondary in this context) */
const ButtonError = () => (
  <Button
    theme="Error"
    label="Error"
    handlePress={() => console.log('Error button clicked')}
  />
);

const ButtonInfo = () => (
  <Button
    theme="Info"
    label="Info"
    handlePress={() => console.log('Info button clicked')}
  />
);

// all the possible cases
const AllButtons = () => (
  <ScrollView>
    <View style={{gap: 10}}>
      <Button
        theme="Primary"
        label="Primary Normal"
        varient="Normal"
        handlePress={() => {}}
      />
      <Button
        theme="Primary"
        label="Primary Normal squrare"
        varient="Normal"
        handlePress={() => {}}
        square
      />
      <Button
        theme="Primary"
        label="Primary Border"
        varient="Border"
        handlePress={() => {}}
      />
      <Button
        theme="Error"
        label="Error Normal"
        varient="Normal"
        handlePress={() => {}}
      />
      <Button
        theme="Error"
        label="Error Border"
        varient="Border"
        handlePress={() => {}}
      />
      <Button
        theme="Info"
        label="Info Normal"
        varient="Normal"
        handlePress={() => {}}
      />
      <Button
        theme="Info"
        label="Info Border"
        varient="Border"
        handlePress={() => {}}
      />
    </View>
  </ScrollView>
);

/**
 * Exported variants map for use in catalog view or component registry.
 */
export const BUTTON_VARIANTS = {
  Primary: () => <ButtonPrimary />,
  Error: () => <ButtonError />,
  ButtonInfo: () => <ButtonInfo />,
  All: () => <AllButtons />,
};
