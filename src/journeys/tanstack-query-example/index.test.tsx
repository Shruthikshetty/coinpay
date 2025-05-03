import React from 'react';
import { render } from '@testing-library/react-native';
import QueryExample from './index';

test('renders QueryExample correctly', () => {
  const { getByText } = render(<QueryExample />);
  expect(getByText('QueryExample Component')).toBeTruthy();
});
