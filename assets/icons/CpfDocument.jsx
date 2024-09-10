import React from "react";
import Svg, { Path } from "react-native-svg";

const CpfDocument = ({ width = 25, height = 25, fill = "#3E3E3E" }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 5.83333C0 5.17029 0.263392 4.5344 0.732233 4.06556C1.20107 3.59672 1.83696 3.33333 2.5 3.33333H22.5C23.163 3.33333 23.7989 3.59672 24.2678 4.06556C24.7366 4.5344 25 5.17029 25 5.83333V19.1667C25 19.8297 24.7366 20.4656 24.2678 20.9344C23.7989 21.4033 23.163 21.6667 22.5 21.6667H2.5C1.83696 21.6667 1.20107 21.4033 0.732233 20.9344C0.263392 20.4656 0 19.8297 0 19.1667L0 5.83333ZM5 10C5 9.11594 5.35119 8.26809 5.97631 7.64297C6.60143 7.01785 7.44928 6.66666 8.33333 6.66666C9.21739 6.66666 10.0652 7.01785 10.6904 7.64297C11.3155 8.26809 11.6667 9.11594 11.6667 10C11.6667 10.8841 11.3155 11.7319 10.6904 12.357C10.0652 12.9821 9.21739 13.3333 8.33333 13.3333C7.44928 13.3333 6.60143 12.9821 5.97631 12.357C5.35119 11.7319 5 10.8841 5 10ZM20 10H15V8.33333H20V10ZM20 15H15V13.3333H20V15ZM8.33333 15C7.42737 15 6.5393 15.2523 5.76863 15.7286C4.99797 16.2049 4.37516 16.8863 3.97 17.6967L3.42 18.7933C3.35627 18.9205 3.32616 19.0619 3.33253 19.204C3.3389 19.3461 3.38154 19.4842 3.45639 19.6052C3.53124 19.7261 3.63581 19.8259 3.76014 19.895C3.88447 19.9641 4.02442 20.0003 4.16667 20H12.5C12.6421 20 12.7819 19.9636 12.906 19.8944C13.0301 19.8252 13.1344 19.7254 13.209 19.6044C13.2837 19.4835 13.3262 19.3455 13.3325 19.2036C13.3388 19.0616 13.3087 18.9204 13.245 18.7933L12.6967 17.6967C12.2915 16.8863 11.6687 16.2049 10.898 15.7286C10.1274 15.2523 9.2393 15 8.33333 15Z"
      fill={fill}
    />
  </Svg>
);

export default CpfDocument;