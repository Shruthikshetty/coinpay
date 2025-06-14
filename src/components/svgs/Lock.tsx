import Svg, {Path, SvgProps} from 'react-native-svg';
import {colors} from '~/common/constants/colors.constants';

function Lock({width = 24, height = 24, fill, ...props}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M16.75 8.304V7A4.756 4.756 0 0012 2.25 4.756 4.756 0 007.25 7v1.304c-1.938.257-3 1.542-3 3.696v6c0 2.418 1.332 3.75 3.75 3.75h8c2.418 0 3.75-1.332 3.75-3.75v-6c0-2.153-1.062-3.438-3-3.696zM12 3.75A3.254 3.254 0 0115.25 7v1.25h-6.5V7A3.254 3.254 0 0112 3.75zM18.25 18c0 1.577-.673 2.25-2.25 2.25H8c-1.577 0-2.25-.673-2.25-2.25v-6c0-1.577.673-2.25 2.25-2.25h8c1.577 0 2.25.673 2.25 2.25v6zm-4.98-4c0 .412-.212.76-.52.987V17a.75.75 0 01-1.5 0v-2.038a1.228 1.228 0 01-.485-.962c0-.69.555-1.25 1.245-1.25h.01c.69 0 1.25.56 1.25 1.25z"
        fill={fill ?? colors.info}
      />
    </Svg>
  );
}

export default Lock;
