import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PlusSvg(props) {
  return (
    <Svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M0 25C0 11.81 9.806.321 22.992.024a87.703 87.703 0 014.017 0C40.19.332 50 11.815 50 25s-9.809 24.67-22.991 24.975a87.184 87.184 0 01-4.017.001C9.806 49.68 0 38.19 0 25z"
        fill="#5F33E1"
      />
      <Path
        d="M25 18v14M18 25h14"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PlusSvg;
