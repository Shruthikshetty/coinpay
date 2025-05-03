import React from 'react';
import {render} from '@testing-library/react-native';
import InternationalizationExample from './index';

test('renders InternationalizationExample correctly', () => {
  const {getByText} = render(<InternationalizationExample />);
  expect(getByText('InternationalizationExample Component')).toBeTruthy();
});
