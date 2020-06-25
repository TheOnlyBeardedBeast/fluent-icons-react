import * as React from 'react';
import IconProps from '../IconProps';

export const PersonFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_person_12_filled" fill={color} fill-rule="nonzero">
        <path
          d="M8.5,6 C9.32843,6 10,6.67157 10,7.5 C10,8.61608 9.54103,9.51027 8.78785,10.1148 C8.04658,10.7098 7.05308,11 6,11 C4.94692,11 3.95342,10.7098 3.21215,10.1148 C2.45897,9.51027 2,8.61608 2,7.5 C2,6.72033882 2.59487668,6.07955543 3.3555213,6.00686694 L3.49998,6 L8.5,6 Z M6,1 C7.10457,1 8,1.89543 8,3 C8,4.10457 7.10457,5 6,5 C4.89543,5 4,4.10457 4,3 C4,1.89543 4.89543,1 6,1 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
