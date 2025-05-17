import React from 'react';
import {render} from '@testing-library/react-native';
import ReanimatedExample from './index';

test('renders ReanimatedExample correctly', () => {
  const {getByText} = render(<ReanimatedExample />);
  expect(getByText('ReanimatedExample Component')).toBeTruthy();
});
