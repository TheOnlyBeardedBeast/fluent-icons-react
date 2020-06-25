import * as React from 'react';
import IconProps from '../IconProps';

export const NoneFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_none_20_filled" fill={color} fill-rule="nonzero">
        <path
          d="M10,2 C14.4183,2 18,5.58172 18,10 C18,14.4183 14.4183,18 10,18 C5.58172,18 2,14.4183 2,10 C2,5.58172 5.58172,2 10,2 Z M15.096,5.96465 L5.96465,15.096 C7.07323,15.975 8.47531,16.5 10,16.5 C13.5899,16.5 16.5,13.5899 16.5,10 C16.5,8.47531 15.975,7.07323 15.096,5.96465 L15.096,5.96465 Z M4.90399,14.0353 L14.0353,4.90399 C12.9268,4.02496 11.5247,3.5 10,3.5 C6.41015,3.5 3.5,6.41015 3.5,10 C3.5,11.5247 4.02496,12.9268 4.90399,14.0353 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
