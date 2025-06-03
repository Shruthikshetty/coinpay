import React from 'react';
import {ERROR_POPUP_VARIANTS} from './catalog-component-wrappers/error-popup-wrapper';
import {ALERT_VARIANTS} from './catalog-component-wrappers/alert-wrapper';
import {RADIO_GROUP_VARIANTS} from './catalog-component-wrappers/radio-group-wrapper';
import {BUTTON_VARIANTS} from './catalog-component-wrappers/button-wrapper';
import {LABEL_INPUT_VARIANTS} from './catalog-component-wrappers/label-input-wrapper';
import {HEADER_PANEL_VARIANTS} from './catalog-component-wrappers/header-panel-wrapper';
import {COUNTRY_DROPDOWN_VARIANTS} from './catalog-component-wrappers/country-wrapper';
import {ELEVATED_BOX_VARIANTS} from './catalog-component-wrappers/elevated-box-wrapper';
import {LOADER_VARIANTS} from './catalog-component-wrappers/loader-wrapper';
import {DASHED_INPUT_VARIANTS} from './catalog-component-wrappers/dashed-input';
import {PARSE_TEXT_ALL_VARIANTS} from './catalog-component-wrappers/parse-text';
import {TITLE_SUBTITLE_ALL_VARIANTS} from './catalog-component-wrappers/title-subtitle';
import {TRANSACTION_ITEM_VARIANTS} from './catalog-component-wrappers/transaction-icon';
import {CALENDAR_VARIANTS} from './catalog-component-wrappers/calender';
import {CALENDER_INPUT_VARIANTS} from './catalog-component-wrappers/calender-input';
import {PIN_INPUT_VARIANTS} from './catalog-component-wrappers/pin-input-wrapper';
import {JUMBLE_KEYBOARD_VARIANTS} from './catalog-component-wrappers/jumbled-keyboard-wrapper';

// add all the keys here this will show as option in the drop down
export const COMPONENT_KEYS = [
  'Button',
  'LabelInput',
  'RadioGroup',
  'ErrorPopup',
  'Alert',
  'HeaderPanel',
  'CountryDropdown',
  'ElevatedBox',
  'Loader',
  'DashedInput',
  'Parsetext',
  'TitleSubtitle',
  'TransactionItem',
  'CustomCalender',
  'CalenderInput',
  'PinInput',
  'JumbleKeyBoard',
];
export type ComponentKey = (typeof COMPONENT_KEYS)[number];

// Main component variant map
// place all the component and variants here
export const COMPONENT_VARIANTS_MAP: Record<
  ComponentKey,
  Record<string, () => React.ReactNode>
> = {
  Button: BUTTON_VARIANTS,
  LabelInput: LABEL_INPUT_VARIANTS,
  RadioGroup: RADIO_GROUP_VARIANTS,
  ErrorPopup: ERROR_POPUP_VARIANTS,
  Alert: ALERT_VARIANTS,
  HeaderPanel: HEADER_PANEL_VARIANTS,
  CountryDropdown: COUNTRY_DROPDOWN_VARIANTS,
  ElevatedBox: ELEVATED_BOX_VARIANTS,
  Loader: LOADER_VARIANTS,
  DashedInput: DASHED_INPUT_VARIANTS,
  Parsetext: PARSE_TEXT_ALL_VARIANTS,
  TitleSubtitle: TITLE_SUBTITLE_ALL_VARIANTS,
  TransactionItem: TRANSACTION_ITEM_VARIANTS,
  CustomCalender: CALENDAR_VARIANTS,
  CalenderInput: CALENDER_INPUT_VARIANTS,
  PinInput: PIN_INPUT_VARIANTS,
  JumbleKeyBoard: JUMBLE_KEYBOARD_VARIANTS,
};
