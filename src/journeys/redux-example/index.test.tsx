import React from 'react';
import {render} from '@testing-library/react-native';
import ReduxExample from './index';

test('renders ReduxExample correctly', () => {
  const {getByText} = render(<ReduxExample />);
  expect(getByText('ReduxExample Component')).toBeTruthy();
});
