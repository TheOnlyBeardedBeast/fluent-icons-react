import * as React from 'react';
import IconProps from '../IconProps';

export const MailCopyFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.99992 12.5V6.373L10.7464 9.93097C10.9029 10.023 11.097 10.023 11.2534 9.93097L18 6.373V12.5C18 13.8807 16.8806 15 15.4999 15H6.49992C5.11921 15 3.99992 13.8807 3.99992 12.5Z"
      fill={color}
    />
    <path
      d="M4.0151 5.22293C4.15296 3.9726 5.21286 3 6.49992 3H15.4999C16.787 3 17.8469 3.9726 17.9847 5.22293L10.9999 8.91991L4.0151 5.22293Z"
      fill={color}
    />
    <path
      d="M13.5 17C14.3179 17 15.0441 16.6072 15.5002 16H6.5C4.56701 16 3 14.433 3 12.5V5.5C2.39278 5.9561 2 6.68209 2 7.5V12.5C2 14.9853 4.01472 17 6.5 17H13.5Z"
      fill={color}
    />
  </svg>
);
