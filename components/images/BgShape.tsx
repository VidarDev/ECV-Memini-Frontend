import * as React from 'react';
const BgShape = ({ ...otherProps }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={393} height={453} fill="none" {...otherProps}>
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M393 0H0v376.5C0 418.75 34.25 453 76.5 453c35.624 0 65.561-24.35 74.074-57.314C163.364 405.302 179.267 411 196.5 411c42.25 0 76.5-34.25 76.5-76.5V318h40c44.183 0 80-35.817 80-80V0Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={333}
        x2={-104.072}
        y1={398.5}
        y2={226.436}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF6AD5" />
        <stop offset={0.319} stopColor="#FB4848" />
        <stop offset={0.946} stopColor="#FBE04F" />
      </linearGradient>
    </defs>
  </svg>
);

export default BgShape;
