import React from 'react';
import {ERROR_POPUP_VARIENTS} from './catalog-component-wrappers/error-popup-wrapper';
import {ALERT_VARIANTS} from './catalog-component-wrappers/alert-wrapper';
import {RADIO_GROUP_VARIANTS} from './catalog-component-wrappers/radio-group-wrapper';
import {BUTTON_VARIANTS} from './catalog-component-wrappers/button-wrapper';
import {LABEL_INPUT_VARIANTS} from './catalog-component-wrappers/label-input-wrapper';

// add all the keys here this will show as option in the drop down
export const COMPONENT_KEYS = [
  'Button',
  'LabelInput',
  'RadioGroup',
  'ErrorPopup',
  'Alert',
];
export type ComponentKey = (typeof COMPONENT_KEYS)[number];

// Main component variant map
// place all the component and varients here
export const COMPONENT_VARIANTS_MAP: Record<
  ComponentKey,
  Record<string, () => React.ReactNode>
> = {
  Button: BUTTON_VARIANTS,
  LabelInput: LABEL_INPUT_VARIANTS,
  RadioGroup: RADIO_GROUP_VARIANTS,
  ErrorPopup: ERROR_POPUP_VARIENTS,
  Alert: ALERT_VARIANTS,
};
