import * as React from 'react';
import IconProps from '../IconProps';

export const MailCopyRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 5.5C4 4.11929 5.11929 3 6.5 3H15.5C16.8807 3 18 4.11929 18 5.5V12.5C18 13.8807 16.8807 15 15.5 15H6.5C5.11929 15 4 13.8807 4 12.5V5.5ZM10.7465 9.93097L5 6.961V12.5C5 13.3284 5.67157 14 6.5 14H15.5C16.3284 14 17 13.3284 17 12.5V6.963L11.2535 9.93097L11.1725 9.96932C11.0334 10.0205 10.8769 10.0077 10.7465 9.93097ZM15.5 4H6.5C5.67157 4 5 4.67157 5 5.5V5.801L11 8.91991L17 5.802V5.5C17 4.67157 16.3284 4 15.5 4Z"
      fill={color}
    />
    <path
      d="M13.5 17C14.3179 17 15.0441 16.6072 15.5002 16H6.5C4.56701 16 3 14.433 3 12.5V5.5C2.39278 5.9561 2 6.68209 2 7.5V12.5C2 14.9853 4.01472 17 6.5 17H13.5Z"
      fill={color}
    />
  </svg>
);
