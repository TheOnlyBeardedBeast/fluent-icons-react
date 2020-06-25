import * as React from 'react';
import IconProps from '../IconProps';

export const OwnerFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_owner_24_filled" fill={color} fill-rule="nonzero">
        <path
          d="M17.0016031,15.2440856 L17.0009052,21.2451182 C17.0009052,21.8527788 16.3161092,22.2081862 15.8192057,21.8584172 L12.0007623,19.1706254 L8.18435794,21.8583162 C7.68747081,22.2082475 7.00251516,21.8528589 7.00251516,21.2451182 L7.00069412,15.2459273 C8.37018531,16.3435035 10.1084262,17 12,17 C13.8926316,17 15.6317588,16.3427691 17.0016031,15.2440856 Z M12,2 C15.8659932,2 19,5.13400675 19,9 C19,12.8659932 15.8659932,16 12,16 C8.13400675,16 5,12.8659932 5,9 C5,5.13400675 8.13400675,2 12,2 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
