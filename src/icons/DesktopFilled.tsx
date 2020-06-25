import * as React from 'react';
import IconProps from '../IconProps';

export const DesktopFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_desktop_16_filled" fill={color} fill-rule="nonzero">
        <path
          d="M3.50085,2 C2.67243,2 2.00085,2.67157 2.00085,3.5 L2.00085,10.4971 C2.00085,11.3256 2.67243,11.9971 3.50085,11.9971 L6,11.9971 L6,13 L4.49561,13 C4.21946,13 3.99561,13.2239 3.99561,13.5 C3.99561,13.7761 4.21946,14 4.49561,14 L11.5,14 C11.7761,14 12,13.7761 12,13.5 C12,13.2239 11.7761,13 11.5,13 L10,13 L10,11.9971 L12.5009,11.9971 C13.3293,11.9971 14.0009,11.3256 14.0009,10.4971 L14.0009,3.5 C14.0009,2.67157 13.3293,2 12.5009,2 L3.50085,2 Z M9,11.9971 L7,11.9971 L7,13 L9,13 L9,11.9971 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
