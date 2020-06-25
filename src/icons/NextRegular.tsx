import * as React from 'react';
import IconProps from '../IconProps';

export const NextRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.57668 2.14798C2.91427 1.68039 2 2.15413 2 2.96495V13.035C2 13.8458 2.91427 14.3196 3.57668 13.852L10.7097 8.81695C11.2741 8.41854 11.2741 7.58143 10.7097 7.18302L3.57668 2.14798ZM3 2.96495L10.133 7.99999L3 13.035V2.96495Z"
      fill={color}
    />
    <path
      d="M14 2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V13.5C13 13.7761 13.2239 14 13.5 14C13.7761 14 14 13.7761 14 13.5V2.5Z"
      fill={color}
    />
  </svg>
);
