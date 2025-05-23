/* eslint-disable react-native/no-inline-styles */
import Svg, {Rect, Mask, G, Path, SvgProps} from 'react-native-svg';

function CanadaFlag({height = 24, width = 24, ...props}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Rect
        x={0.25}
        y={3.67993}
        width={23.5}
        height={16.6429}
        rx={1.75}
        fill="#fff"
        stroke="#F5F5F5"
        strokeWidth={0.5}
      />
      <Mask
        id="a"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={3}
        width={24}
        height={18}>
        <Rect
          x={0.25}
          y={3.67993}
          width={23.5}
          height={16.6429}
          rx={1.75}
          fill="#fff"
          stroke="#fff"
          strokeWidth={0.5}
        />
      </Mask>
      <G mask="url(#a)" fill="#FF3131">
        <Path d="M17.1428 3.42993H23.999940000000002V20.57283H17.1428z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 20.573h6.857V3.43H0v17.143zM13.921 11.223a.333.333 0 01-.562-.301l.355-1.778-1.143.572L12 8l-.571 1.715-1.143-.572.355 1.778a.333.333 0 01-.562.3l-.129-.128a.333.333 0 00-.471 0l-.336.336L8 10.858l.571 1.143-.335.336a.333.333 0 000 .471l1.478 1.479h1.715L11.714 16h.572l.285-1.714h1.715l1.478-1.479a.333.333 0 000-.471L15.43 12 16 10.858l-1.143.572-.336-.336a.333.333 0 00-.471 0l-.129.129z"
        />
      </G>
    </Svg>
  );
}

export default CanadaFlag;
