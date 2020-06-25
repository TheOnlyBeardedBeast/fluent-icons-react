import * as React from 'react';
import IconProps from '../IconProps';

export const TextBoxAlignBottomFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 14.5C3 15.8807 4.11929 17 5.5 17L14.5 17C15.8807 17 17 15.8807 17 14.5L17 5.5C17 4.11929 15.8807 3 14.5 3L5.5 3C4.11929 3 3 4.11929 3 5.5L3 14.5ZM13.2941 14H6.70588C6.31603 14 6 13.6642 6 13.25C6 12.8358 6.31603 12.5 6.70588 12.5L13.2941 12.5C13.684 12.5 14 12.8358 14 13.25C14 13.6642 13.684 14 13.2941 14ZM13.2941 11L6.70588 11C6.31603 11 6 10.6642 6 10.25C6 9.83579 6.31603 9.5 6.70588 9.5L13.2941 9.5C13.684 9.5 14 9.83579 14 10.25C14 10.6642 13.684 11 13.2941 11Z"
      fill={color}
    />
  </svg>
);
