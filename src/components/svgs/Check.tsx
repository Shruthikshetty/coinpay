import Svg, {Path, SvgProps} from 'react-native-svg';
import {themeColors} from '~/common/constants/colors.constants';

function Check({height = 25, width = 25, fill, ...props}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      {...props}>
      <Path
        d="M9.493 17.75H9.49a.751.751 0 01-.532-.224l-4-4.062a.75.75 0 111.07-1.053l3.468 3.524 9.466-9.466a.75.75 0 111.061 1.061l-10 10a.747.747 0 01-.53.22z"
        fill={fill ?? themeColors.contentPrimary}
      />
    </Svg>
  );
}

export default Check;
