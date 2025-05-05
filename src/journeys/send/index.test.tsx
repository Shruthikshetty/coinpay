import React from 'react';
import {render} from '@testing-library/react-native';
import Send from './index';

test('renders Send correctly', () => {
  const {getByText} = render(<Send />);
  expect(getByText('Send Component')).toBeTruthy();
});
