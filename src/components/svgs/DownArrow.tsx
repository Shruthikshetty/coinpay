import Svg, {Path, SvgProps} from 'react-native-svg';
import {themeColors} from '~/common/constants/colors.constants';

function DownArrow({width = 45, height = 45, fill, ...props}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      {...props}>
      <Path
        d="M12.493 14.75a.744.744 0 01-.53-.22l-4-4A.75.75 0 019.024 9.47l3.47 3.47 3.47-3.47a.75.75 0 011.061 1.061l-4 4a.752.752 0 01-.532.22z"
        fill={fill ?? themeColors.contentDisabled}
      />
    </Svg>
  );
}

export default DownArrow;
