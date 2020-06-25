import * as React from 'react';
import IconProps from '../IconProps';

export const NoneRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_none_20_regular" fill={color} fill-rule="nonzero">
        <path
          d="M10,2 C14.4183,2 18,5.58172 18,10 C18,14.4183 14.4183,18 10,18 C5.58172,18 2,14.4183 2,10 C2,5.58172 5.58172,2 10,2 Z M15.2907,5.41636 L5.41636,15.2907 C6.64442,16.3556 8.24696,17 10,17 C13.866,17 17,13.866 17,10 C17,8.24696 16.3556,6.64442 15.2907,5.41636 L15.2907,5.41636 Z M4.70925,14.5836 L14.5836,4.70925 C13.3556,3.6444 11.753,3 10,3 C6.13401,3 3,6.13401 3,10 C3,11.753 3.6444,13.3556 4.70925,14.5836 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
