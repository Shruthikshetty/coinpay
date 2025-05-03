import Svg, {Path, SvgProps} from 'react-native-svg';
import {colors} from '~/common/constants/colors.constants';

function InfoCircle({width = 16, height = 16, fill, ...props}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.75 14.5a.75.75 0 01-1.5 0v-4.571a.75.75 0 011.5 0V16.5zm-.73-7a1.005 1.005 0 01-1.005-1c0-.552.443-1 .995-1h.01a1 1 0 110 2z"
        fill={fill ?? colors.gray400}
      />
    </Svg>
  );
}

export default InfoCircle;
