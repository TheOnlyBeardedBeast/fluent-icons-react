import * as React from 'react';
import IconProps from '../IconProps';

export const UsbStickRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_usb_stick_20_regular" fill={color} fill-rule="nonzero">
        <path
          d="M12.5,2 C12.7761,2 13,2.22386 13,2.5 L13,2.5 L13,6 C14.1046,6 15,6.89543 15,8 L15,8 L15,16 C15,17.1046 14.1046,18 13,18 L13,18 L7,18 C5.89543,18 5,17.1046 5,16 L5,16 L5,8 C5,6.89543 5.89543,6 7,6 L7,6 L7,2.5 C7,2.22386 7.22386,2 7.5,2 L7.5,2 Z M13,7 L7,7 C6.44772,7 6,7.44772 6,8 L6,16 C6,16.5523 6.44772,17 7,17 L13,17 C13.5523,17 14,16.5523 14,16 L14,8 C14,7.44772 13.5523,7 13,7 Z M12,3 L8,3 L8,6 L12,6 L12,3 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
