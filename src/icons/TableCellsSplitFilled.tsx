import * as React from 'react';
import IconProps from '../IconProps';

export const TableCellsSplitFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 6H17V5.5C17 4.11929 15.8807 3 14.5 3H10V6Z" fill={color} />
    <path d="M17 13V7H3V13H17ZM10 8V12H9V8H10Z" fill={color} />
    <path d="M10 17H14.5C15.8807 17 17 15.8807 17 14.5V14H10V17Z" fill={color} />
    <path d="M9 14H3V14.5C3 15.8807 4.11929 17 5.5 17H9V14Z" fill={color} />
    <path d="M9 6V3H5.5C4.11929 3 3 4.11929 3 5.5V6H9Z" fill={color} />
  </svg>
);
