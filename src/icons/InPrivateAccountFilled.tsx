import * as React from 'react';
import IconProps from '../IconProps';

export const InPrivateAccountFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5 8C12.3284 8 13 8.67157 13 9.5H8V10.5H12.9605C12.9067 10.8405 12.7987 11.1775 12.6393 11.5H8V12.5H11.929C11.0732 13.3835 9.73125 14 8 14C4.85951 14 3 11.9714 3 10V9.5C3 8.67157 3.67157 8 4.5 8H11.5Z"
      fill={color}
    />
    <path
      d="M10.7047 3.75C10.7344 3.91214 10.75 4.07925 10.75 4.25C10.75 4.42075 10.7344 4.58786 10.7047 4.75H8V5.75H10.3053C9.81459 6.50255 8.96539 7 8 7C6.48122 7 5.25 5.76878 5.25 4.25C5.25 2.73122 6.48122 1.5 8 1.5C8.96539 1.5 9.81459 1.99745 10.3053 2.75H8V3.75H10.7047Z"
      fill={color}
    />
  </svg>
);
