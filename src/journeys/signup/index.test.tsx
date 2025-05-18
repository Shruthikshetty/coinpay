import React from 'react';
import { render } from '@testing-library/react-native';
import SignUp from './index';

test('renders SignUp correctly', () => {
  const { getByText } = render(<SignUp />);
  expect(getByText('SignUp Component')).toBeTruthy();
});
