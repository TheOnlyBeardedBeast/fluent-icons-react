import * as React from 'react';
import IconProps from '../IconProps';

export const FolderBriefcaseFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.06667 3.3L9.38572 4.28908L7.43319 6.34437C7.33879 6.44374 7.20774 6.5 7.07069 6.5H2V5.5C2 4.11929 3.11929 3 4.5 3H7.16667C7.49122 3 7.80702 3.10527 8.06667 3.3Z"
      fill={color}
    />
    <path
      d="M8.15819 7.03312L10.5647 4.5H15.5C16.8255 4.5 17.91 5.53154 17.9947 6.83562L18 7V11.1707C17.6872 11.0602 17.3506 11 17 11V10C17 9.44772 16.5523 9 16 9H12C11.4477 9 11 9.44772 11 10V11C9.34315 11 8 12.3431 8 14V17H4.5C3.11929 17 2 15.8807 2 14.5V7.5H7.07069C7.48186 7.5 7.875 7.33122 8.15819 7.03312Z"
      fill={color}
    />
    <path
      d="M11 12C9.89543 12 9 12.8954 9 14V17C9 18.1046 9.89543 19 11 19H17C18.1046 19 19 18.1046 19 17V14C19 12.8954 18.1046 12 17 12H16V10.5C16 10.2239 15.7761 10 15.5 10H12.5C12.2239 10 12 10.2239 12 10.5V12H11ZM13 12V11H15V12H13Z"
      fill={color}
    />
  </svg>
);
