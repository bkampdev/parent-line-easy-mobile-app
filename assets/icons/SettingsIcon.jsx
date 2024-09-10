import React from "react";
import Svg, { Path } from "react-native-svg";

function SettingsIcon({ color = "#3E3E3E" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="26"
      fill="none"
      viewBox="0 0 27 26"
    >
      <Path
        fill={color}
        d="M9.64 25.084c-.908-.02-1.342-.613-1.18-1.268.26-1.043-.086-1.717-1.122-1.968-.301-.073-.73.08-1.005.267-.63.429-1.095.492-1.517.075-.423-.42-.396-.912.083-1.504.455-.561.442-.868-.07-1.627-.442-.657-.751-.784-1.412-.585-.71.213-1.197.04-1.424-.505-.22-.525 0-1.002.613-1.332.67-.36.776-.636.6-1.564-.142-.749-.381-.982-1.095-1.069-.897-.109-1.388-.76-.988-1.407.174-.281.583-.506.923-.577.801-.166 1.016-.32 1.167-1.141.166-.907.064-1.147-.652-1.534-.56-.302-.778-.798-.574-1.303.216-.532.723-.733 1.364-.537.748.227 1.018.118 1.502-.605.497-.743.5-1.02.011-1.621-.443-.548-.462-1.05-.053-1.463.41-.414.917-.398 1.462.042.618.502.888.496 1.67-.033.678-.457.786-.737.563-1.468-.197-.646-.002-1.148.529-1.366.526-.216 1 .004 1.33.617.36.67.634.774 1.565.597.746-.142.98-.384 1.066-1.098.088-.732.454-1.127 1.03-1.11.556.016.892.394.978 1.104.09.74.315.962 1.12 1.11.88.16 1.158.049 1.509-.602.33-.614.803-.836 1.328-.623.53.216.727.723.533 1.368-.227.747-.117 1.016.608 1.5.742.496 1.02.498 1.62.008.543-.443 1.05-.462 1.462-.053.414.41.398.92-.044 1.461-.501.616-.496.886.031 1.67.456.678.74.788 1.466.566.65-.198 1.148-.006 1.369.524.218.524-.004 1.004-.613 1.333-.675.363-.777.626-.6 1.562.142.748.38.983 1.093 1.07.737.089 1.129.448 1.114 1.026-.015.56-.39.895-1.1.982-.745.09-.963.31-1.112 1.117-.162.88-.049 1.164.598 1.51.616.331.838.8.627 1.327-.212.53-.722.729-1.367.536-.734-.222-1.015-.115-1.47.559-.531.79-.538 1.053-.039 1.67.442.546.46 1.052.052 1.463-.41.414-.92.399-1.462-.043-.615-.502-.888-.497-1.67.03-.678.459-.786.739-.566 1.466.197.65.005 1.15-.525 1.37-.524.218-1.003-.002-1.33-.613-.364-.674-.63-.776-1.563-.6-.751.142-.982.379-1.069 1.094-.089.735-.452 1.128-1.027 1.114-.557-.014-.895-.394-.981-1.1-.09-.743-.312-.962-1.117-1.111-.907-.168-1.111-.047-1.547.643-.196.31-.549.52-.693.652v-.003zM9.194 6.678c-4.317 3.067-4.161 9.76.005 12.63.984-1.706 2.065-3.363 2.9-5.136.31-.655.305-1.703-.006-2.36-.836-1.771-1.914-3.428-2.9-5.134h.001zm12.661 5.318C21.421 6.878 15.653 3.5 10.951 5.66c.028.066.05.138.086.201.924 1.606 1.841 3.215 2.784 4.808.098.167.345.248.53.357.38.223.76.447 1.148.656.222.12.46.293.692.297 1.268.03 2.536.014 3.805.014h1.86v.002zM10.887 20.39c2.765 1 5.308.79 7.663-.832 1.921-1.322 3.023-3.171 3.367-5.552-2.041 0-3.998-.113-5.932.057-.74.065-1.658.61-2.086 1.223-1.11 1.592-1.994 3.341-3.013 5.105l.001-.001z"
      ></Path>
    </Svg>
  );
}

export default SettingsIcon;
