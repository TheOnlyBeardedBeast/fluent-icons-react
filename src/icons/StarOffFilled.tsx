import * as React from 'react';
import IconProps from '../IconProps';

export const StarOffFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.36509 10.0722L10.1464 10.8536C10.3417 11.0488 10.6583 11.0488 10.8536 10.8536C11.0488 10.6583 11.0488 10.3417 10.8536 10.1465L1.85355 1.14646C1.65829 0.951199 1.34171 0.951199 1.14645 1.14646C0.951184 1.34172 0.951184 1.65831 1.14645 1.85357L3.42563 4.13275L1.17279 4.46011C0.762678 4.5197 0.598923 5.02369 0.895681 5.31296L3.08509 7.4471L2.56824 10.4606C2.49818 10.869 2.9269 11.1805 3.29371 10.9877L5.99997 9.56489L8.70623 10.9877C9.07304 11.1805 9.50175 10.869 9.4317 10.4606L9.36509 10.0722Z"
      fill={color}
    />
    <path
      d="M11.1043 5.31296L9.24582 7.12449L4.84063 2.7193L5.5516 1.27872C5.73501 0.907094 6.26493 0.907094 6.44834 1.27872L7.80147 4.02045L10.8272 4.46011C11.2373 4.5197 11.401 5.02369 11.1043 5.31296Z"
      fill={color}
    />
  </svg>
);