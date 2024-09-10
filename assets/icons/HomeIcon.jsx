import React from "react";
import Svg, { Path } from "react-native-svg";

function HomeIcon({ color = "#3E3E3E" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="21"
      fill="none"
      viewBox="0 0 24 21"
    >
      <Path
        fill={color}
        d="M9.5 19.75V13.5h5v6.25c0 .688.563 1.25 1.25 1.25h3.75c.688 0 1.25-.563 1.25-1.25V11h2.125c.575 0 .85-.713.413-1.087L12.838.5a1.26 1.26 0 00-1.675 0L.713 9.913C.288 10.287.55 11 1.125 11H3.25v8.75c0 .688.563 1.25 1.25 1.25h3.75c.688 0 1.25-.563 1.25-1.25z"
      />
    </Svg>
  );
}

export default HomeIcon;
