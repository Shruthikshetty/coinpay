import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {colors} from '~/common/constants/colors.constants';

function EnvelopeIcon({width = 24, height = 24, fill, ...props}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M18 20.75H6c-2.418 0-3.75-1.332-3.75-3.75V8c0-2.418 1.332-3.75 3.75-3.75h12c2.418 0 3.75 1.332 3.75 3.75v9c0 2.418-1.332 3.75-3.75 3.75zm-12-15c-1.577 0-2.25.673-2.25 2.25v9c0 1.577.673 2.25 2.25 2.25h12c1.577 0 2.25-.673 2.25-2.25V8c0-1.577-.673-2.25-2.25-2.25H6zm7.03 7.429l4.91-3.572a.75.75 0 10-.882-1.213l-4.912 3.572a.248.248 0 01-.293 0L6.941 8.394a.75.75 0 00-.883 1.213l4.912 3.573a1.747 1.747 0 002.06-.001z"
        fill={fill ?? colors.gray400}
      />
    </Svg>
  );
}

export default EnvelopeIcon;
