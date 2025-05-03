import Svg, {Path, SvgProps} from 'react-native-svg';
import {colors} from '~/common/constants/colors.constants';

function UserIcon({
  width = 50,
  height = 50,
  fill,
  ...props
}: Partial<SvgProps>) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="blue"
      {...props}>
      <Path
        d="M12.502 10.75a4.255 4.255 0 01-4.25-4.25 4.255 4.255 0 014.25-4.25 4.255 4.255 0 014.25 4.25 4.255 4.255 0 01-4.25 4.25zm0-7a2.752 2.752 0 00-2.75 2.75 2.752 2.752 0 002.75 2.75 2.752 2.752 0 002.75-2.75 2.753 2.753 0 00-2.75-2.75zm3.988 18H8.496c-2.42 0-3.753-1.325-3.753-3.731 0-2.661 1.506-5.769 5.75-5.769h4c4.244 0 5.75 3.107 5.75 5.769 0 2.406-1.333 3.731-3.753 3.731zm-5.997-8c-3.943 0-4.25 3.267-4.25 4.269 0 1.564.674 2.231 2.253 2.231h7.994c1.58 0 2.253-.667 2.253-2.231 0-1.001-.307-4.269-4.25-4.269h-4z"
        fill={fill ?? colors.blue500}
      />
    </Svg>
  );
}

export default UserIcon;
