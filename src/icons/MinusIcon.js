import * as React from "react"
import Svg, {
  Rect,
  Mask,
  Path,
  G,
  Defs,
  LinearGradient,
  Stop
} from "react-native-svg"

function MinusIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x={24}
        y={24}
        width={24}
        height={24}
        rx={12}
        transform="rotate(180 24 24)"
        fill="url(#paint0_linear_19_1695)"
      />
      <Mask
        id="a"
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x={8}
        y={11}
        width={8}
        height={2}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.042 12.012c0-.345.28-.625.625-.625h6.666a.625.625 0 010 1.25H8.667a.625.625 0 01-.625-.625z"
          fill="#006FFD"
        />
      </Mask>
      <G mask="url(#a)">
        <Path transform="rotate(180 17 17)" fill="#fff" d="M17 17H27V27H17z" />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_19_1695"
          x1={36}
          y1={24}
          x2={36}
          y2={48}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#EDDFCB" />
          <Stop offset={1} stopColor="#DBC3A0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default MinusIcon;
