import * as React from 'react';
import IconProps from '../IconProps';

export const UsbStickFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_usb_stick_20_filled" fill={color} fill-rule="nonzero">
        <path
          d="M7,2.5 C7,2.22386 7.22386,2 7.5,2 L12.5,2 C12.7761,2 13,2.22386 13,2.5 L13,6 C14.1046,6 15,6.89543 15,8 L15,16 C15,17.1046 14.1046,18 13,18 L7,18 C5.89543,18 5,17.1046 5,16 L5,8 C5,6.89543 5.89543,6 7,6 L7,2.5 Z M8,6 L12,6 L12,3 L8,3 L8,6 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
