import * as React from 'react';
import IconProps from '../IconProps';

export const RenameRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.5 2C6.22386 2 6 2.22386 6 2.5C6 2.77614 6.22386 3 6.5 3H7.5V13H6.5C6.22386 13 6 13.2239 6 13.5C6 13.7761 6.22386 14 6.5 14H9.5C9.77614 14 10 13.7761 10 13.5C10 13.2239 9.77614 13 9.5 13H8.5V3H9.5C9.77614 3 10 2.77614 10 2.5C10 2.22386 9.77614 2 9.5 2H6.5Z"
      fill={color}
    />
    <path
      d="M4 4H6.5V5H4C3.44771 5 3 5.44771 3 6V9.99726C3 10.5495 3.44772 10.9973 4 10.9973H6.5V11.9973H4C2.89543 11.9973 2 11.1018 2 9.99726V6C2 4.89543 2.89543 4 4 4Z"
      fill={color}
    />
    <path
      d="M12 10.9973H9.5V11.9973H12C13.1046 11.9973 14 11.1018 14 9.99727V6C14 4.89543 13.1046 4 12 4H9.5V5H12C12.5523 5 13 5.44772 13 6V9.99727C13 10.5496 12.5523 10.9973 12 10.9973Z"
      fill={color}
    />
  </svg>
);
