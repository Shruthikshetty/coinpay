/* eslint-disable react-native/no-inline-styles */
import Svg, {
  Path,
  Mask,
  G,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';

function AustraliaFlag({height = 24, width = 24, ...props}: SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M0 5.43a2 2 0 012-2h20a2 2 0 012 2v13.143a2 2 0 01-2 2H2a2 2 0 01-2-2V5.43z"
        fill="#fff"
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
        <Path
          d="M0 5.43a2 2 0 012-2h20a2 2 0 012 2v13.143a2 2 0 01-2 2H2a2 2 0 01-2-2V5.43z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#a)">
        <Path d="M0 3.43h24v17.143H0V3.43z" fill="#0A17A7" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 6.859l-4-3.43h.571l4 2.858h1.143l4.572-2.857v.4a.333.333 0 01-.14.271L6.286 6.86V8l3.612 3.097a.189.189 0 01-.233.297l-3.95-2.822H4.57L0 11.43v-.572l4-2.857V6.86z"
          fill="#FF2E3B"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 6.858v1.143l-4 2.857v.572L4.57 8.573h1.143l3.95 2.822a.189.189 0 00.234-.298L6.286 8.001V6.858l3.86-2.757a.333.333 0 00.14-.271v-.4L5.714 6.287H4.571l-4-2.857H0l4 3.428zm.785-1.238l-4-2.857h-2.587l5.135 4.402v.493l-4 2.857v2.118l5.43-3.394H5.5l3.776 2.698c.146.104.32.16.498.16.794 0 1.16-.989.557-1.506l-3.38-2.896v-.493l3.582-2.558a1 1 0 00.418-.814V2.227L5.523 5.62h-.738z"
          fill="#fff"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 6.287v2.286h4v2.762c0 .368.298.666.667.666h.952a.667.667 0 00.667-.666V8.573h3.905a.667.667 0 00.666-.667v-.952a.667.667 0 00-.666-.667H6.286V3.43H4v2.857H0z"
          fill="url(#paint0_linear_91_2625)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 6.859h4.571V3.43h1.143V6.859h4.572V8H5.714V11.43H4.571V8H0V6.86z"
          fill="url(#paint1_linear_91_2625)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.143 17.43l-1.008.53.193-1.122-.816-.795 1.127-.163.504-1.021.504 1.02 1.126.164-.815.795.192 1.122-1.007-.53zM17.143 18.287l-.808.237.236-.808-.236-.808.808.236.808-.236-.237.808.237.808-.808-.237zM17.143 7.43l-.808.237.236-.809-.236-.808.808.237.808-.237-.237.808.237.809-.808-.237zM20.572 10.858l-.809.237.237-.808-.237-.808.808.236.809-.236-.237.808.237.808-.808-.237zM13.714 12.001l-.808.237.237-.808-.237-.808.808.236.809-.236-.237.808.237.808-.809-.237zM18.857 13.43l-.404.118.119-.404-.119-.404.404.118.404-.118-.118.404.118.404-.404-.118z"
          fill="#fff"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_91_2625"
          x1={0}
          y1={3.42993}
          x2={0}
          y2={12.0014}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#F0F0F0" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_91_2625"
          x1={0}
          y1={3.42993}
          x2={0}
          y2={11.4299}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FF2E3B" />
          <Stop offset={1} stopColor="#FC0D1B" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default AustraliaFlag;
