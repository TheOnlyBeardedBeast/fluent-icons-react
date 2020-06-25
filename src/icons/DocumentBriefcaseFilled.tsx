import * as React from 'react';
import IconProps from '../IconProps';

export const DocumentBriefcaseFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 2V6.5C10 7.32843 10.6716 8 11.5 8H16V16.5C16 17.3284 15.3284 18 14.5 18H12V13.5C12 12.1193 10.8807 11 9.5 11H9V10C9 9.44772 8.55228 9 8 9H4V3.5C4 2.67157 4.67157 2 5.5 2H10Z"
      fill={color}
    />
    <path d="M11 2.25V6.5C11 6.77614 11.2239 7 11.5 7H15.75L11 2.25Z" fill={color} />
    <path
      d="M4 10.5C4 10.2239 4.22386 10 4.5 10H7.5C7.77614 10 8 10.2239 8 10.5V12H9C10.1046 12 11 12.8954 11 14V17C11 18.1046 10.1046 19 9 19H3C1.89543 19 1 18.1046 1 17V14C1 12.8954 1.89543 12 3 12H4V10.5ZM7 11H5V12H7V11ZM3 13C2.44772 13 2 13.4477 2 14V17C2 17.5523 2.44772 18 3 18H9C9.55228 18 10 17.5523 10 17V14C10 13.4477 9.55229 13 9 13H3Z"
      fill={color}
    />
  </svg>
);
