import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {colors} from '~/common/constants/colors.constants';

function SvgComponent({width = 24, height = 24, fill, ...props}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M16 8.25H8.75V7c0-.861.34-1.68.946-2.296A3.268 3.268 0 0112 3.75a3.24 3.24 0 013.144 2.435.75.75 0 101.453-.37A4.736 4.736 0 0012 2.25a4.763 4.763 0 00-3.364 1.394A4.754 4.754 0 007.25 7v1.304c-1.938.257-3 1.542-3 3.696v6c0 2.418 1.332 3.75 3.75 3.75h8c2.418 0 3.75-1.332 3.75-3.75v-6c0-2.418-1.332-3.75-3.75-3.75zM18.25 18c0 1.577-.673 2.25-2.25 2.25H8c-1.577 0-2.25-.673-2.25-2.25v-6c0-1.577.673-2.25 2.25-2.25h8c1.577 0 2.25.673 2.25 2.25v6zm-4.98-4c0 .412-.212.76-.52.987V17a.75.75 0 01-1.5 0v-2.038a1.228 1.228 0 01-.485-.962c0-.69.555-1.25 1.245-1.25h.01c.69 0 1.25.56 1.25 1.25z"
        fill={fill ?? colors.info}
      />
    </Svg>
  );
}

export default SvgComponent;
