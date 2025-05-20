import React from 'react';
import { render } from '@testing-library/react-native';
import AddEmail from './index';

test('renders AddEmail correctly', () => {
  const { getByText } = render(<AddEmail />);
  expect(getByText('AddEmail Component')).toBeTruthy();
});
