import * as React from 'react';
import IconProps from '../IconProps';

export const CheckmarkSquareFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_checkmark_square_24_filled" fill={color} fill-rule="nonzero">
        <path
          d="M18.7559,3 C19.9985,3 21.0059,4.00736 21.0059,5.25 L21.0059,5.25 L21.0059,18.75 C21.0059,19.9926 19.9985,21 18.7559,21 L18.7559,21 L5.25586,21 C4.01322,21 3.00586,19.9926 3.00586,18.75 L3.00586,18.75 L3.00586,5.25 C3.00586,4.00736 4.01322,3 5.25586,3 L5.25586,3 Z M15.2197,8.71966 L10.75,13.1891 L9.27654,11.7157 C8.98365,11.4228 8.50878,11.4228 8.21588,11.7157 C7.92299,12.0085 7.92299,12.4834 8.21589,12.7763 L10.2197,14.7801 C10.5126,15.073 10.9874,15.073 11.2803,14.7801 L16.2803,9.78034 C16.5732,9.48746 16.5732,9.01258 16.2804,8.71968 C15.9875,8.42678 15.5126,8.42677 15.2197,8.71966 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
