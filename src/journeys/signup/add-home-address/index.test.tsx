import React from 'react';
import {render} from '@testing-library/react-native';
import AddHomeAddress from './index';

test('renders AddHomeAddress correctly', () => {
  const {getByText} = render(<AddHomeAddress />);
  expect(getByText('AddHomeAddress Component')).toBeTruthy();
});
