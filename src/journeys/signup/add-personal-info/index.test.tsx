import React from 'react';
import {render} from '@testing-library/react-native';
import AddPersonalInfo from './index';

test('renders AddPersonalInfo correctly', () => {
  const {getByText} = render(<AddPersonalInfo />);
  expect(getByText('AddPersonalInfo Component')).toBeTruthy();
});
