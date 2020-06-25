import * as React from 'react';
import IconProps from '../IconProps';

export const PersonSupportRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 9.75C13 8.92157 12.3284 8.25 11.5 8.25H4.5C3.67157 8.25 3 8.92157 3 9.75V10.25C3 12.2214 4.85951 14.25 8 14.25C11.1405 14.25 13 12.2214 13 10.25V9.75ZM4 9.75C4 9.47386 4.22386 9.25 4.5 9.25H11.5C11.7761 9.25 12 9.47386 12 9.75V10.25C12 11.6876 10.5678 13.25 8 13.25C5.43216 13.25 4 11.6876 4 10.25V9.75Z"
      fill={color}
    />
    <path
      d="M10.75 4.5C10.75 2.98122 9.51878 1.75 8 1.75C7.03461 1.75 6.18541 2.24745 5.69473 3L4 3C3.72386 3 3.5 3.22386 3.5 3.5L3.5 5.5C3.5 5.51558 3.50071 5.53099 3.50211 5.5462H3.5V6.5C3.5 7.32843 4.17157 8 5 8H5.38199C5.38354 8.00001 5.38509 7.99998 5.38664 7.99998C5.72544 7.99998 6.0001 7.72564 6.0001 7.38723C6.0001 7.04881 5.72544 6.77448 5.38664 6.77448C5.1981 6.77448 5.02942 6.85944 4.91689 6.99312C4.6803 6.95354 4.5 6.74783 4.5 6.5V6H4.74951C5.04688 6 5.32403 5.91347 5.55717 5.76421C6.01491 6.6469 6.93703 7.25 8 7.25C9.51878 7.25 10.75 6.01878 10.75 4.5ZM6.25 4.5C6.25 3.5335 7.0335 2.75 8 2.75C8.9665 2.75 9.75 3.5335 9.75 4.5C9.75 5.4665 8.9665 6.25 8 6.25C7.0335 6.25 6.25 5.4665 6.25 4.5ZM5.24951 4.5C5.24951 4.77614 5.02565 5 4.74951 5L4.5 5L4.5 4L5.24951 4V4.5Z"
      fill={color}
    />
  </svg>
);
