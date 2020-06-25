import * as React from 'react';
import IconProps from '../IconProps';

export const StoreMicrosoftRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.6311 6.99805H7.63305V8.99999H5.6311V6.99805Z" fill={color} />
    <path d="M10.369 6.99806H8.36707V8.99999H10.369V6.99806Z" fill={color} />
    <path d="M5.63112 10H7.63305V12.0019H5.63112V10Z" fill={color} />
    <path d="M10.369 10H8.36707V12.0019H10.369V10Z" fill={color} />
    <path
      d="M8 2C6.61929 2 5.5 3.11929 5.5 4.5V5H4C3.17157 5 2.5 5.67157 2.5 6.5V11C2.5 12.6569 3.84315 14 5.5 14H10.5C12.1569 14 13.5 12.6569 13.5 11V6.5C13.5 5.67157 12.8284 5 12 5H10.5V4.5C10.5 3.11929 9.38071 2 8 2ZM9.5 5H6.5V4.5C6.5 3.67157 7.17157 3 8 3C8.82843 3 9.5 3.67157 9.5 4.5V5ZM4 6H12C12.2761 6 12.5 6.22386 12.5 6.5V11C12.5 12.1046 11.6046 13 10.5 13H5.5C4.39543 13 3.5 12.1046 3.5 11V6.5C3.5 6.22386 3.72386 6 4 6Z"
      fill={color}
    />
  </svg>
);
