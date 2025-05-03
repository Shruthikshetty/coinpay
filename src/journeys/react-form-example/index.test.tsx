import React from 'react';
import {render} from '@testing-library/react-native';
import ReactFormExample from './index';

test('renders reactFormExample correctly', () => {
  const {getByText} = render(<ReactFormExample />);
  expect(getByText('reactFormExample Component')).toBeTruthy();
});
