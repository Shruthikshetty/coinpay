import Svg, {Path, SvgProps} from 'react-native-svg';
import {themeColors} from '~/common/constants/colors.constants';

function AngleLeft({width = 25, height = 24, fill, ...props}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      {...props}>
      <Path
        d="M15.247 19.75a.744.744 0 01-.53-.22l-7-7a.75.75 0 010-1.061l7-7a.75.75 0 111.06 1.061L9.308 12l6.47 6.47a.75.75 0 01-.53 1.28z"
        fill={fill ?? themeColors.contentPrimary}
      />
    </Svg>
  );
}

export default AngleLeft;
