import * as React from 'react';
import IconProps from '../IconProps';

export const EraseFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_erase_20_filled" fill={color} fill-rule="nonzero">
        <path
          d="M11.1969,2.43913 C11.7827,1.85334 12.7324,1.85334 13.3182,2.43913 L17.5609,6.68177 C18.1467,7.26755 18.1467,8.2173 17.5609,8.80309 L9.36396,17 L14.5,17 C14.7761,17 15,17.2239 15,17.5 C15,17.7761 14.7761,18 14.5,18 L7.81962,18 C7.40984,18.0215 6.99291,17.8757 6.67991,17.5627 L2.43726,13.3201 C1.85148,12.7343 1.85148,11.7846 2.43726,11.1988 L11.1969,2.43913 Z M9.78098,15.1688 L4.83123,10.219 L3.14437,11.9059 C2.94911,12.1011 2.94911,12.4177 3.14437,12.613 L7.38701,16.8556 C7.58227,17.0509 7.89886,17.0509 8.09412,16.8556 L9.78098,15.1688 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
