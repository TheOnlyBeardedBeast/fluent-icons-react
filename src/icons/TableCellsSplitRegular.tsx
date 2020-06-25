import * as React from 'react';
import IconProps from '../IconProps';

export const TableCellsSplitRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 8V12H9V8H10Z" fill={color} />
    <path
      d="M17 5.5C17 4.11929 15.8807 3 14.5 3H5.5C4.11929 3 3 4.11929 3 5.5V14.5C3 15.8807 4.11929 17 5.5 17H14.5C15.8807 17 17 15.8807 17 14.5V5.5ZM4 14.5V14H9V16H5.5L5.35554 15.9931C4.59489 15.9204 4 15.2797 4 14.5ZM9 4L8.99313 6H3.99313L4 5.5L4.00687 5.35554C4.07955 4.59489 4.7203 4 5.5 4H9ZM9.99313 6L10 4H14.5L14.6445 4.00687C15.4051 4.07955 16 4.7203 16 5.5L15.9931 6H9.99313ZM16 13H4L3.99313 7H15.9931L16 13ZM16 14.5L15.9931 14.6445C15.9204 15.4051 15.2797 16 14.5 16H10V14H16V14.5Z"
      fill={color}
    />
  </svg>
);
