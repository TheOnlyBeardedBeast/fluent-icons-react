import * as React from 'react';
import IconProps from '../IconProps';

export const PaymentRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_payment_20_regular" fill={color} fill-rule="nonzero">
        <path
          d="M16,5 C17.1046,5 18,5.89543 18,7 L18,7 L18,13 C18,14.1046 17.1046,15 16,15 L16,15 L4,15 C2.89543,15 2,14.1046 2,13 L2,13 L2,7 C2,5.89543 2.89543,5 4,5 L4,5 Z M17,9 L3,9 L3,13 C3,13.5523 3.44772,14 4,14 L4,14 L16,14 C16.5523,14 17,13.5523 17,13 L17,13 L17,9 Z M15.5,12 C15.7761,12 16,12.2239 16,12.5 C16,12.7761 15.7761,13 15.5,13 L15.5,13 L13.5,13 C13.2239,13 13,12.7761 13,12.5 C13,12.2239 13.2239,12 13.5,12 L13.5,12 Z M16,6 L4,6 C3.44772,6 3,6.44772 3,7 L3,8 L17,8 L17,7 C17,6.44772 16.5523,6 16,6 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
