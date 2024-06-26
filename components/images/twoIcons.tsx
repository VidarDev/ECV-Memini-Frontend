import * as React from 'react';
const TwoIcons = ({ startColor, endColor, ...otherProps }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={27} height={24} fill="none" {...otherProps}>
    <path
      fill="url(#pathb)"
      d="M0 11.508C.628 9.202 1.54 7.04 3.152 5.222 5.98 2.033 9.495.178 13.758.003c1.394-.058 2.81.425 4.212.683.189.036.356.203.534.312l-.044.27c-.287 0-.581.043-.86-.008C11.302.18 4.291 3.813 1.673 9.543a10.642 10.642 0 0 0-.672 1.928C.842 12.14.566 12.3 0 11.9v-.392Z"
    />
    <path
      fill="url(#pathb)"
      d="M7.178 15.07c.338-.508.658-1.027 1.017-1.521 3.09-4.249 9.18-6.344 14.063-4.768 2.11.683 3.936 1.805 4.713 4.067.076.225-.03.508-.05.766-.212-.112-.48-.174-.622-.341-4.411-5.164-11.354-4.11-15.57-1.133-1.049.74-1.877 1.794-2.81 2.702-.152.149-.316.28-.475.42-.088-.06-.178-.126-.266-.188v-.004Z"
    />
    <path
      fill="url(#pathc)"
      d="M11.216 21.509c.65-.367 1.264-.835 1.957-1.082 3.457-1.22 6.812-1.046 9.91 1.038.646.436 1.1 1.177 1.582 1.82.098.13.008.548-.138.664-.12.098-.526.036-.66-.098-3.595-3.591-7.764-3.802-12.27-2.139-.08.03-.188-.01-.283-.022l-.098-.185v.004Z"
    />
    <defs>
      <linearGradient
        id="patha"
        x1={-1.962}
        x2={29.444}
        y1={12.118}
        y2={-2.133}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.229} stopColor={startColor} />
        <stop offset={0.904} stopColor={endColor} />
      </linearGradient>
      <linearGradient
        id="pathb"
        x1={5.077}
        x2={28.845}
        y1={15.264}
        y2={-4.718}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.229} stopColor={startColor} />
        <stop offset={0.904} stopColor={endColor} />
      </linearGradient>
      <linearGradient
        id="pathc"
        x1={9.785}
        x2={24.662}
        y1={23.998}
        y2={10.234}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.229} stopColor={startColor} />
        <stop offset={0.904} stopColor={endColor} />
      </linearGradient>
    </defs>
  </svg>
);

export default TwoIcons;
