/* eslint-disable react-native/no-inline-styles */
import Svg, {Rect, Mask, G, Path, SvgProps} from 'react-native-svg';

function IndiaFlag({height = 24, width = 24, ...props}: SvgProps) {
  return (
    <Svg
      width={height}
      height={width}
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
      <G mask="url(#a)" fillRule="evenodd" clipRule="evenodd">
        <Path d="M0 9.144h24V3.43H0v5.714z" fill="#FFA44A" />
        <Path d="M0 20.573h24v-5.715H0v5.715z" fill="#1A9F0B" />
        <Path
          d="M12 13.716a1.714 1.714 0 100-3.429 1.714 1.714 0 000 3.429z"
          fill="#181A93"
          fillOpacity={0.15}
        />
        <Path
          d="M14.381 12.001a2.38 2.38 0 11-4.762 0 2.38 2.38 0 014.762 0zm-.667 0a1.714 1.714 0 11-3.428 0 1.714 1.714 0 013.428 0z"
          fill="#181A93"
        />
        <Path
          d="M12 12.573a.571.571 0 100-1.143.571.571 0 000 1.143z"
          fill="#181A93"
        />
      </G>
    </Svg>
  );
}

export default IndiaFlag;
