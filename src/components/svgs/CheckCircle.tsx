import Svg, {Path, SvgProps} from 'react-native-svg';
import {colors} from '~/common/constants/colors.constants';

function CheckCircle({width = 25, height = 24, fill, ...props}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      {...props}>
      <Path
        d="M12.493 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm4.03 8.2l-4.67 4.66a.71.71 0 01-.53.22c-.19 0-.38-.07-.53-.22l-2.33-2.33a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1.8 1.8 4.14-4.13c.29-.3.77-.3 1.06 0 .29.29.29.76 0 1.06z"
        fill={fill ?? colors.black}
      />
    </Svg>
  );
}

export default CheckCircle;
