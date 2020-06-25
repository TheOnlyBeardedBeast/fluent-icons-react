import * as React from 'react';
import IconProps from '../IconProps';

export const SafeFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_safe_24_filled" fill={color} fill-rule="nonzero">
        <path
          d="M12.45,2.15 C14.992,4.05652 17.5866,5 20.25,5 C20.6642,5 21,5.33579 21,5.75 L21,11 C21,16.0012 18.0424,19.6757 12.2749,21.9478 C12.0982,22.0174 11.9018,22.0174 11.7251,21.9478 C5.95756,19.6757 3,16.0012 3,11 L3,5.75 C3,5.33579 3.33579,5 3.75,5 C6.41341,5 9.00797,4.05652 11.55,2.15 C11.8167,1.95 12.1833,1.95 12.45,2.15 Z M11.9956,9.00046 C10.8913,9.00046 9.99603,9.89568 9.99603,11 C9.99603,11.8408 10.515,12.5603 11.25,12.8559 L11.25,12.8559 L11.25,15.25 C11.25,15.6642 11.5858,16 12,16 C12.4142,16 12.75,15.6642 12.75,15.25 L12.75,15.25 L12.75,12.8523 C13.4804,12.5545 13.9951,11.8374 13.9951,11 C13.9951,9.89568 13.0999,9.00046 11.9956,9.00046 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
