import * as React from 'react';
import IconProps from '../IconProps';

export const StoreMicrosoftFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 2C6.61929 2 5.5 3.11929 5.5 4.5V5H4C3.17157 5 2.5 5.67157 2.5 6.5V11C2.5 12.6569 3.84315 14 5.5 14H10.5C12.1569 14 13.5 12.6569 13.5 11V6.5C13.5 5.67157 12.8284 5 12 5H10.5V4.5C10.5 3.11929 9.38071 2 8 2ZM9.5 5H6.5V4.5C6.5 3.67157 7.17157 3 8 3C8.82843 3 9.5 3.67157 9.5 4.5V5ZM7.63305 6.99805V8.99999H5.6311V6.99805H7.63305ZM8.36707 6.99805H10.369V8.99998H8.36707V6.99805ZM7.63303 10V12.0019H5.6311V10H7.63303ZM8.36707 10H10.369V12.0019H8.36707V10Z"
      fill={color}
    />
  </svg>
);
