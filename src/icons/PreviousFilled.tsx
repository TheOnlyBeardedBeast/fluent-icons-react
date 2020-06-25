import * as React from 'react';
import IconProps from '../IconProps';

export const PreviousFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.75 13.0351C13.75 13.8459 12.8357 14.3196 12.1733 13.852L5.04034 8.81698C4.47592 8.41857 4.47592 7.58146 5.04034 7.18305L12.1733 2.14801C12.8357 1.68042 13.75 2.15416 13.75 2.96498L13.75 13.0351Z"
      fill={color}
    />
    <path
      d="M1.75 13.25C1.75 13.6642 2.08579 14 2.5 14C2.91421 14 3.25 13.6642 3.25 13.25L3.25 2.75C3.25 2.33579 2.91421 2 2.5 2C2.08579 2 1.75 2.33579 1.75 2.75V13.25Z"
      fill={color}
    />
  </svg>
);
