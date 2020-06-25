import * as React from 'react';
import IconProps from '../IconProps';

export const FolderOpenFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 3C1.89543 3 1 3.89543 1 5V11C1 11.4134 1.12542 11.7975 1.34029 12.1163L2.80997 7.07982C2.99669 6.43991 3.58332 6 4.24991 6H13.003V5.99612C13.003 4.89155 12.1076 3.99612 11.003 3.99612H6.17452L5.06508 3.10942C4.97645 3.03859 4.86637 3 4.75291 3H3Z"
      fill={color}
    />
    <path
      d="M14.9413 7.64027C15.0349 7.32021 14.7948 7 14.4614 7H4.24991C4.02771 7 3.83217 7.14664 3.76993 7.35994L2.3109 12.3599C2.21752 12.68 2.45753 13 2.79089 13H12.2505C12.9168 13 13.5033 12.5604 13.6902 11.9208L14.9413 7.64027Z"
      fill={color}
    />
  </svg>
);