import * as React from 'react';
import IconProps from '../IconProps';

export const CloudFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_cloud_20_filled" fill={color} fill-rule="nonzero">
        <path
          d="M10,4 C12.8166455,4 14.4144805,5.9232888 14.6468632,8.2459882 L14.7179487,8.24598582 C16.5305756,8.24598582 18,9.75792339 18,11.6229929 C18,13.4880624 16.5305756,15 14.7179487,15 L5.28205128,15 C3.46942441,15 2,13.4880624 2,11.6229929 C2,9.75792339 3.46942441,8.24598582 5.28207129,8.24598582 L5.35313675,8.24598819 C5.5868713,5.90802232 7.18335452,4 10,4 Z"
          id="🎨Color"
        ></path>
      </g>
    </g>
  </svg>
);
