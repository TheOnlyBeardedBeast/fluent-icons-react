import * as React from 'react';
import IconProps from '../IconProps';

export const RowTripleFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.75 2.01999C4.7835 2.01999 4 2.80349 4 3.76999V6.26999C4 7.23649 4.7835 8.01999 5.75 8.01999H18.25C19.2165 8.01999 20 7.23649 20 6.26999V3.76999C20 2.80349 19.2165 2.01999 18.25 2.01999H5.75Z"
      fill={color}
    />
    <path
      d="M5.75 9.01999C4.7835 9.01999 4 9.80349 4 10.77V13.27C4 14.2365 4.7835 15.02 5.75 15.02H18.25C19.2165 15.02 20 14.2365 20 13.27V10.77C20 9.80349 19.2165 9.01999 18.25 9.01999H5.75Z"
      fill={color}
    />
    <path
      d="M5.75 16.02C4.7835 16.02 4 16.8035 4 17.77V20.27C4 21.2365 4.7835 22.02 5.75 22.02H18.25C19.2165 22.02 20 21.2365 20 20.27V17.77C20 16.8035 19.2165 16.02 18.25 16.02H5.75Z"
      fill={color}
    />
  </svg>
);
