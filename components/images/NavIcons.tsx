import * as React from 'react';
const NavIcons = ({ startColor, endColor, centerColor, ...otherProps }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" {...otherProps}>
    <g clipPath="url(#patha)">
      <circle cx={24} cy={24} r={24} fill="url(#b)" />
      <path
        stroke={centerColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M24 18v12m-6-6h12"
      />
    </g>
    <defs>
      <linearGradient id="b" x1={24} x2={16.536} y1={8} y2={63.437} gradientUnits="userSpaceOnUse">
        <stop stopColor={startColor} />
        <stop offset={1} stopColor={endColor} />
      </linearGradient>
      <clipPath id="patha">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default NavIcons;
