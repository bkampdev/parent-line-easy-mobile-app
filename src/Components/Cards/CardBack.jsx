import React from "react";
import Svg, { Rect, Circle, Path } from "react-native-svg";

const CardBack = ({ cvvLength }) => (
  <Svg
    width="351"
    height="220"
    viewBox="0 0 351 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width="351" height="220" rx="20" fill="#3E3E3E" />
    <Rect y="22" width="351" height="33" fill="black" />
    <Rect x="30" y="85" width="301" height="32" fill="#D9D9D9" />
    <Rect x="30" y="88" width="273" height="3" fill="#F0F0F0" />
    <Rect x="30" y="94" width="273" height="3" fill="#F0F0F0" />
    <Rect x="30" y="100" width="273" height="3" fill="#F0F0F0" />
    <Rect x="30" y="106" width="273" height="3" fill="#F0F0F0" />
    <Rect x="30" y="112" width="273" height="3" fill="#F0F0F0" />
    <Circle cx="299.5" cy="101.5" r="45.5" fill="#D9D9D9" />
    <Circle cx="300" cy="102" r="41" fill="white" />

    {cvvLength >= 1 && (
      <Path
        d="M282.356 103.17L286.076 105.27L285.386 106.53L281.636 104.34V108.6H280.256L280.286 104.34L276.536 106.53L275.816 105.27L279.566 103.17L275.816 101.07L276.536 99.78L280.286 102L280.256 97.74H281.636V102L285.386 99.78L286.076 101.07L282.356 103.17Z"
        fill="black"
      />
    )}
    {cvvLength >= 2 && (
      <Path
        d="M301.414 103.17L305.134 105.27L304.444 106.53L300.694 104.34V108.6H299.314L299.344 104.34L295.594 106.53L294.874 105.27L298.624 103.17L294.874 101.07L295.594 99.78L299.344 102L299.314 97.74H300.694V102L304.444 99.78L305.134 101.07L301.414 103.17Z"
        fill="black"
      />
    )}
    {cvvLength >= 3 && (
      <Path
        d="M320.472 103.17L324.192 105.27L323.502 106.53L319.752 104.34V108.6H318.372L318.402 104.34L314.652 106.53L313.932 105.27L317.682 103.17L313.932 101.07L314.652 99.78L318.402 102L318.372 97.74H319.752V102L323.502 99.78L324.192 101.07L320.472 103.17Z"
        fill="black"
      />
    )}
  </Svg>
);

export default CardBack