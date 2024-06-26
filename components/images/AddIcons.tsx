import * as React from 'react';
const AddIcons = ({ startColor, endColor, centerColor, ...otherProps }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...otherProps}>
    <g clipPath="url(#a)">
      <circle cx={12} cy={12} r={12} fill="url(#b)" />
      <path
        stroke={centerColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v12m-6-6h12"
      />
    </g>
    <defs>
      <linearGradient id="b" x1={12} x2={8.268} y1={4} y2={31.718} gradientUnits="userSpaceOnUse">
        <stop stopColor={startColor} />
        <stop offset={1} stopColor={endColor} />
      </linearGradient>
      <clipPath id="a">
        <path fill={centerColor} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default AddIcons;
