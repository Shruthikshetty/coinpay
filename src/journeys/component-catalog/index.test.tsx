import React from 'react';
import { render } from '@testing-library/react-native';
import ComponentCatalogScreen from './index';

test('renders ComponentCatalogScreen correctly', () => {
  const { getByText } = render(<ComponentCatalogScreen />);
  expect(getByText('ComponentCatalogScreen Component')).toBeTruthy();
});
