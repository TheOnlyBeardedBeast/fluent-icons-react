import * as React from 'react';
import IconProps from '../IconProps';

export const TextBoxAlignTopFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 5.5C17 4.11929 15.8807 3 14.5 3H5.5C4.11929 3 3 4.11929 3 5.5V14.5C3 15.8807 4.11929 17 5.5 17H14.5C15.8807 17 17 15.8807 17 14.5V5.5ZM6.70588 6H13.2941C13.684 6 14 6.33579 14 6.75C14 7.16421 13.684 7.5 13.2941 7.5H6.70588C6.31603 7.5 6 7.16421 6 6.75C6 6.33579 6.31603 6 6.70588 6ZM6.70588 9H13.2941C13.684 9 14 9.33579 14 9.75C14 10.1642 13.684 10.5 13.2941 10.5H6.70588C6.31603 10.5 6 10.1642 6 9.75C6 9.33579 6.31603 9 6.70588 9Z"
      fill={color}
    />
  </svg>
);
