import * as React from 'react';
import IconProps from '../IconProps';

export const TabSweepFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V12.0218C20.3945 11.6341 19.7204 11.3441 19 11.1739V6C19 5.44772 18.5523 5 18 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H11.1739C11.3441 19.7204 11.6341 20.3945 12.0218 21H6C4.34315 21 3 19.6569 3 18V6Z"
      fill={color}
    />
    <path
      d="M23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM17.3536 15.3536C17.5488 15.1583 17.5488 14.8417 17.3536 14.6464C17.1583 14.4512 16.8417 14.4512 16.6464 14.6464L14.1464 17.1464C13.9512 17.3417 13.9512 17.6583 14.1464 17.8536L16.6464 20.3536C16.8417 20.5488 17.1583 20.5488 17.3536 20.3536C17.5488 20.1583 17.5488 19.8417 17.3536 19.6464L15.7071 18H20.5C20.7761 18 21 17.7761 21 17.5C21 17.2239 20.7761 17 20.5 17H15.7071L17.3536 15.3536Z"
      fill={color}
    />
  </svg>
);