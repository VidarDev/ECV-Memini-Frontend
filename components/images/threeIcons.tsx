import * as React from 'react';
const ThreeIcons = ({ startColor, endColor, ...otherProps }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={54} height={20} fill="none" {...otherProps}>
    <g clipPath="url(#patha)">
      <path
        fill="url(#pathb)"
        d="M0 10.04c3.027-1.77 6.172-1.325 9.343-.488 4.1 1.081 8.188 2.344 12.52 1.819a72.395 72.395 0 0 0 6.022-.994c3.68-.762 7.202.175 10.769.8 1.375.244 2.825.419 4.207.269a3.422 3.422 0 0 0 2.932-4.419c-.546-1.85-1.375-3.619-2.078-5.425-.15-.381-.302-.756-.459-1.137.145-.088.296-.175.44-.263.622.844 1.407 1.625 1.84 2.556.829 1.788 1.902 3.625 2.078 5.513.295 3.169-2.06 5.431-5.3 5.475-1.852.025-3.773-.113-5.556-.569-3.655-.937-7.246-.994-10.926-.194-4.634 1-9.249.707-13.751-.75C8.15 10.958 4.232 9.721 0 10.377v-.337Z"
      />
      <path
        fill="url(#pathc)"
        d="M42.59 19.427c-5.085-.681-10.064-2.212-15.333-1.85 2.029-1.087 4.12-1.569 6.38-1.369 3.604.32 7.215.763 10.825.825 3.88.07 6.744-2.362 7.453-6.018.17-.875.139-1.963-.245-2.738-.84-1.681-1.934-3.244-3-4.8-.56-.812-1.27-1.525-1.74-2.531.32.137.716.206.954.425 1.344 1.269 2.706 2.525 3.95 3.887 2.16 2.375 2.643 5.088 1.406 8.07-1.35 3.255-3.767 5.2-7.315 5.768-.546.087-1.092.225-1.639.337h-1.701l.006-.006Z"
      />
    </g>
    <defs>
      <linearGradient
        id="pathb"
        x1={-5.052}
        x2={41.556}
        y1={13.751}
        y2={-34.956}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.229} stopColor={startColor} />
        <stop offset={0.904} stopColor={endColor} />
      </linearGradient>
      <linearGradient
        id="pathc"
        x1={24.431}
        x2={70.523}
        y1={19.436}
        y2={-0.309}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.229} stopColor={startColor} />
        <stop offset={0.904} stopColor={endColor} />
      </linearGradient>
      <clipPath id="patha">
        <path fill="#fff" d="M0 0h54v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ThreeIcons;
