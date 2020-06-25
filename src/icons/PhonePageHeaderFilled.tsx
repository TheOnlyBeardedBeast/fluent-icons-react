import * as React from 'react';
import IconProps from '../IconProps';

export const PhonePageHeaderFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_phone_page_header_24_filled" fill={color} fill-rule="nonzero">
        <path
          d="M18,6.005 L18,19.75 C18,20.9926407 16.9926407,22 15.75,22 L8.25,22 C7.00735931,22 6,20.9926407 6,19.75 L6,6.005 L18,6.005 Z M15.75,2 C16.9926407,2 18,3.00735931 18,4.25 L18,5 L6,5 L6,4.25 C6,3.00735931 7.00735931,2 8.25,2 L15.75,2 Z"
          id="🎨Color"
        ></path>
      </g>
    </g>
  </svg>
);
