/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import Svg, {
  Rect,
  Mask,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function AmericaFlag({height = 24, width = 24, ...props}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Rect y={3.42993} width={24} height={17.1429} rx={2} fill="#fff" />
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
        <Rect y={3.42993} width={24} height={17.1429} rx={2} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 3.43H0v1.143h24V3.43zm0 2.286H0v1.143h24V5.716zM0 8h24v1.143H0V8.001zm24 2.286H0v1.143h24v-1.143zM0 12.573h24v1.143H0v-1.143zm24 2.285H0v1.143h24v-1.143zM0 17.145h24v1.143H0v-1.143zm24 2.286H0v1.143h24V19.43z"
          fill="#D02F44"
        />
        <Path fill="#46467F" d="M0 3.42993H10.2857V11.42993H0z" />
        <G filter="url(#filter0_d_91_1624)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.286 5.144a.571.571 0 11-1.143 0 .571.571 0 011.143 0zm2.285 0a.571.571 0 11-1.142 0 .571.571 0 011.142 0zm1.715.572a.571.571 0 100-1.143.571.571 0 000 1.143zm2.857-.572a.571.571 0 11-1.143 0 .571.571 0 011.143 0zM2.857 6.858a.571.571 0 100-1.142.571.571 0 000 1.142zm2.857-.571a.571.571 0 11-1.143 0 .571.571 0 011.143 0zm1.715.571a.571.571 0 100-1.142.571.571 0 000 1.142zm1.714.572A.571.571 0 118 7.43a.571.571 0 011.143 0zM6.286 8a.571.571 0 100-1.143.571.571 0 000 1.143zM4.57 7.43a.571.571 0 11-1.142 0 .571.571 0 011.142 0zM1.714 8a.571.571 0 100-1.143.571.571 0 000 1.143zm1.715.572a.571.571 0 11-1.143 0 .571.571 0 011.143 0zm1.714.571a.571.571 0 100-1.143.571.571 0 000 1.143zM8 8.573a.571.571 0 11-1.143 0 .571.571 0 011.143 0zm.571 1.714a.571.571 0 100-1.143.571.571 0 000 1.143zm-1.714-.571a.571.571 0 11-1.143 0 .571.571 0 011.143 0zM4 10.287a.571.571 0 100-1.143.571.571 0 000 1.143zm-1.714-.571a.571.571 0 11-1.143 0 .571.571 0 011.143 0z"
            fill="url(#paint0_linear_91_1624)"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_91_1624"
          x1={1.14282}
          y1={4.57275}
          x2={1.14282}
          y2={10.287}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#F0F0F0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default AmericaFlag;
