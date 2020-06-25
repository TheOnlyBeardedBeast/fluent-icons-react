import * as React from 'react';
import IconProps from '../IconProps';

export const FlagFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_flag_16_filled" fill={color} fill-rule="nonzero">
        <path
          d="M4,10 L13,10 C13.4066863,10 13.6432483,9.54031514 13.4068667,9.2093809 L11.1144518,6 L13.4068667,2.7906191 C13.6432483,2.45968486 13.4066863,2 13,2 L3.5,2 C3.22385763,2 3,2.22385763 3,2.5 L3,13.5 C3,13.7761424 3.22385763,14 3.5,14 C3.77614237,14 4,13.7761424 4,13.5 L4,10 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
