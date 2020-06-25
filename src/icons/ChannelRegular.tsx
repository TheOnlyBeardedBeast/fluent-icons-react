import * as React from 'react';
import IconProps from '../IconProps';

export const ChannelRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5 5.5C3.31786 5.5 3.14709 5.5487 3 5.63378C2.7011 5.80669 2.5 6.12986 2.5 6.5C2.5 6.87014 2.7011 7.19331 3 7.36622C3.14709 7.4513 3.31786 7.5 3.5 7.5C3.68214 7.5 3.85291 7.4513 4 7.36622C4.2989 7.19331 4.5 6.87014 4.5 6.5C4.5 6.12986 4.2989 5.80669 4 5.63378C3.85291 5.5487 3.68214 5.5 3.5 5.5Z"
      fill={color}
    />
    <path
      d="M3.5 4.5C3.39744 4.5 3.29668 4.50772 3.19828 4.52261C3.57881 3.6276 4.46611 3 5.5 3H14.5C15.8807 3 17 4.11929 17 5.5V14.5C17 15.8807 15.8807 17 14.5 17H5.5C4.11929 17 3 15.8807 3 14.5V8.43699C3.15981 8.47812 3.32735 8.5 3.5 8.5C3.67265 8.5 3.84019 8.47812 4 8.43699V14.5C4 15.3284 4.67157 16 5.5 16H14.5C15.3284 16 16 15.3284 16 14.5V5.5C16 4.67157 15.3284 4 14.5 4H5.5C4.98679 4 4.53378 4.25774 4.26334 4.65083C4.02812 4.55363 3.77032 4.5 3.5 4.5Z"
      fill={color}
    />
    <path
      d="M7 8.5C7 8.22386 7.22386 8 7.5 8H12.5C12.7761 8 13 8.22386 13 8.5C13 8.77614 12.7761 9 12.5 9H7.5C7.22386 9 7 8.77614 7 8.5Z"
      fill={color}
    />
    <path
      d="M7.5 11C7.22386 11 7 11.2239 7 11.5C7 11.7761 7.22386 12 7.5 12H10.5C10.7761 12 11 11.7761 11 11.5C11 11.2239 10.7761 11 10.5 11H7.5Z"
      fill={color}
    />
  </svg>
);
