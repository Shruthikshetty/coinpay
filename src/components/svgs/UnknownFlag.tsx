/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import Svg, {Rect, Mask, G, Path, SvgProps} from 'react-native-svg';

function UnknownFlag({height = 24, width = 24, ...props}: SvgProps) {
  return (
    <Svg
      width={height}
      height={width}
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
        <Path fill="#19BFBF" d="M0 3.42993H24V20.57283H0z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 18.287a6.286 6.286 0 100-12.571 6.286 6.286 0 000 12.571zm5.111-5.714a5.148 5.148 0 01-3.21 4.209c.557-1.135.882-2.614.945-4.21h2.265zm-3.409 0c-.083 1.928-.587 3.631-1.371 4.56a5.245 5.245 0 01-.662 0c-.784-.929-1.287-2.632-1.37-4.56h3.403zm-4.548 0c.063 1.595.388 3.074.945 4.209a5.148 5.148 0 01-3.21-4.21h2.265zm1.144-1.143h3.404c-.083-1.928-.587-3.632-1.372-4.561a5.221 5.221 0 00-.66 0c-.785.93-1.288 2.633-1.372 4.561zM10.1 7.221c-.558 1.135-.883 2.614-.946 4.21H6.89a5.148 5.148 0 013.21-4.21zm7.012 4.21h-2.266c-.063-1.596-.388-3.075-.945-4.21a5.148 5.148 0 013.21 4.21z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}

export default UnknownFlag;
