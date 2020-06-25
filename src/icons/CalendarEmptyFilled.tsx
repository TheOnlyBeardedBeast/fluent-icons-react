import * as React from 'react';
import IconProps from '../IconProps';

export const CalendarEmptyFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_calendar_empty_16_filled" fill={color} fill-rule="nonzero">
        <path
          d="M14,6 L14,11.5 C14,12.8807119 12.8807119,14 11.5,14 L4.5,14 C3.11928813,14 2,12.8807119 2,11.5 L2,6 L14,6 Z M11.5,2 C12.8807119,2 14,3.11928813 14,4.5 L14,5 L2,5 L2,4.5 C2,3.11928813 3.11928813,2 4.5,2 L11.5,2 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
