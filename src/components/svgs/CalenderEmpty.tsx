import Svg, {Path, SvgProps} from 'react-native-svg';
import {colors} from '~/common/constants/colors.constants';

function CalenderEmptyIcon({
  width = 24,
  height = 24,
  fill,
  ...props
}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M18 3.75h-1.25V3a.75.75 0 00-1.5 0v.75h-6.5V3a.75.75 0 00-1.5 0v.75H6c-2.418 0-3.75 1.332-3.75 3.75V18c0 2.418 1.332 3.75 3.75 3.75h12c2.418 0 3.75-1.332 3.75-3.75V7.5c0-2.418-1.332-3.75-3.75-3.75zM20.25 18c0 1.577-.673 2.25-2.25 2.25H6c-1.577 0-2.25-.673-2.25-2.25V7.5c0-1.577.673-2.25 2.25-2.25h1.25V6a.75.75 0 001.5 0v-.75h6.5V6a.75.75 0 001.5 0v-.75H18c1.577 0 2.25.673 2.25 2.25V18z"
        fill={fill ?? colors.info}
      />
    </Svg>
  );
}

export default CalenderEmptyIcon;
