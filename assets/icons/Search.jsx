import React from "react";
import Svg, { Path } from "react-native-svg";

function SearchIcon({ color = "#3E3E3E" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="none"
      viewBox="0 0 26 26"
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M24.25 24.25l-7.5-7.5m-15-6.25a8.75 8.75 0 1017.5 0 8.75 8.75 0 00-17.5 0z"
      ></Path>
    </Svg>
  );
}

export default SearchIcon;
