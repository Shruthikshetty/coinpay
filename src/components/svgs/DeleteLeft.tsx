import Svg, {Path, SvgProps} from 'react-native-svg';
import {themeColors} from '~/common/constants/colors.constants';

function DeleteLeft({height = 25, width = 24, fill, ...props}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M12 9.5l5 5m0-5l-5 5m-7.492-.545l2.932 3.8c.352.457.528.685.75.85a2 2 0 00.652.32c.266.075.554.075 1.131.075H17.8c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C21 17.48 21 16.92 21 15.8V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C19.481 5 18.92 5 17.8 5H9.973c-.577 0-.865 0-1.13.075a2 2 0 00-.653.32c-.222.165-.398.393-.75.85l-2.932 3.8c-.54.7-.81 1.05-.913 1.435a2 2 0 000 1.04c.104.385.374.735.913 1.435z"
        stroke={fill ?? themeColors.contentPrimary}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default DeleteLeft;
