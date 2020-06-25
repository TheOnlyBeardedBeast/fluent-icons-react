import * as React from 'react';
import IconProps from '../IconProps';

export const HomeFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_home_20_filled" fill={color} fill-rule="nonzero">
        <path
          d="M3,17 L3,9.87213902 C3,9.31600142 3.23156378,8.78497649 3.6390978,8.40655204 L9.3195489,3.13184745 C9.70323004,2.7755721 10.29677,2.7755721 10.6804511,3.13184745 L16.3609022,8.40655204 C16.7684362,8.78497649 17,9.31600142 17,9.87213902 L17,17 C17,17.5522847 16.5522847,18 16,18 L13,18 C12.4477153,18 12,17.5522847 12,17 L12,13 C12,12.4477153 11.5522847,12 11,12 L9,12 C8.44771525,12 8,12.4477153 8,13 L8,17 C8,17.5522847 7.55228475,18 7,18 L4,18 C3.44771525,18 3,17.5522847 3,17 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
