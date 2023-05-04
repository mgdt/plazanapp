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

function PlusIcon(props) {
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
        fill="#E0C18F"
      />
      <Rect
        x={24}
        y={24}
        width={24}
        height={24}
        rx={12}
        transform="rotate(180 24 24)"
        fill="url(#paint0_linear_19_1691)"
      />
      <Mask
        id="a"
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x={7}
        y={7}
        width={10}
        height={10}
      >
        <Path
          d="M11.375 16.167a.625.625 0 101.25 0v-3.542h3.542a.625.625 0 100-1.25h-3.542V7.834a.625.625 0 10-1.25 0v3.541H7.834a.625.625 0 100 1.25h3.541v3.542z"
          fill="#006FFD"
        />
      </Mask>
      <G mask="url(#a)">
        <Path transform="rotate(180 17 17)" fill="#fff" d="M17 17H27V27H17z" />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_19_1691"
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

export default PlusIcon;
