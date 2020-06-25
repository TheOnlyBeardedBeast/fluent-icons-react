import * as React from 'react';
import IconProps from '../IconProps';

export const iOSChevronRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_ios_chevron_24_regular" fill={color} fill-rule="nonzero">
        <path
          d="M13.9697,4.71967 C13.6768,5.01256 13.6768,5.48744 13.9697,5.78033 L20.1893,12.0000025 L13.9697,18.2197 C13.6768,18.5126 13.6768,18.9874 13.9697,19.2803 C14.2626,19.5732 14.7374,19.5732 15.0303,19.2803 L21.7803,12.5303 C22.0732,12.2374 22.0732,11.7626 21.7803,11.4697 L15.0303,4.71967 C14.7374,4.42678 14.2626,4.42678 13.9697,4.71967 Z"
          id="Path"
        ></path>
      </g>
    </g>
  </svg>
);
