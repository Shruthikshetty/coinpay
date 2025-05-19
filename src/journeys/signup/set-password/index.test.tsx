import React from 'react';
import {render} from '@testing-library/react-native';
import SetPassword from './index';

test('renders SetPassword correctly', () => {
  const {getByText} = render(<SetPassword />);
  expect(getByText('SetPassword Component')).toBeTruthy();
});
