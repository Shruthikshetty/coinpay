import Svg, {Path, SvgProps} from 'react-native-svg';
import {colors} from '~/common/constants/colors.constants';

function Eye({width = 24, height = 24, fill, ...props}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M21.235 10.138C19.922 7.938 16.975 4.25 12 4.25s-7.922 3.689-9.235 5.888a3.622 3.622 0 000 3.724c1.313 2.2 4.26 5.888 9.235 5.888s7.922-3.689 9.235-5.888a3.622 3.622 0 000-3.724zm-1.287 2.954c-1.15 1.926-3.713 5.158-7.948 5.158s-6.798-3.231-7.948-5.158a2.13 2.13 0 010-2.185C5.202 8.981 7.765 5.749 12 5.749s6.798 3.231 7.948 5.158a2.126 2.126 0 010 2.185zM12 7.75A4.255 4.255 0 007.75 12 4.255 4.255 0 0012 16.25 4.255 4.255 0 0016.25 12 4.255 4.255 0 0012 7.75zm0 7A2.752 2.752 0 019.25 12 2.752 2.752 0 0112 9.25 2.752 2.752 0 0114.75 12 2.752 2.752 0 0112 14.75z"
        fill={fill ?? colors.gray400}
      />
    </Svg>
  );
}

export default Eye;
