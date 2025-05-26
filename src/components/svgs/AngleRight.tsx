import Svg, {Path, SvgProps} from 'react-native-svg';

function AngleRight({width = 25, height = 24, ...props}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      {...props}>
      <Path
        d="M9.493 19.75a.75.75 0 01-.53-1.281l6.47-6.47-6.47-6.47a.75.75 0 111.061-1.061l7 7a.75.75 0 010 1.061l-7 7a.745.745 0 01-.53.221z"
        fill="#2A2A2A"
      />
    </Svg>
  );
}

export default AngleRight;
