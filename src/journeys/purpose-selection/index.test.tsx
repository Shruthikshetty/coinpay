// Screen1.test.js
import React from 'react';
import {render} from '@testing-library/react-native';
import Screen1 from './index';

describe('Screen1 component', () => {
  it('renders correctly', () => {
    render(<Screen1 />);
  });
  it('contains the text "screen1"', () => {
    const {getByText} = render(<Screen1 />);
    expect(getByText('screen1')).toBeTruthy();
  });
});
