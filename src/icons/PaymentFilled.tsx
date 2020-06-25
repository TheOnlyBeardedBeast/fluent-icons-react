import * as React from 'react';
import IconProps from '../IconProps';

export const PaymentFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_payment_20_filled" fill={color} fill-rule="nonzero">
        <path
          d="M18,9 L18,13 C18,14.1046 17.1046,15 16,15 L4,15 C2.89543,15 2,14.1046 2,13 L2,9 L18,9 Z M15.5,12 L13.5,12 C13.2239,12 13,12.2239 13,12.5 C13,12.7761 13.2239,13 13.5,13 L15.5,13 C15.7761,13 16,12.7761 16,12.5 C16,12.2239 15.7761,12 15.5,12 Z M16,5 C17.1046,5 18,5.89543 18,7 L18,8 L2,8 L2,7 C2,5.89543 2.89543,5 4,5 L16,5 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
