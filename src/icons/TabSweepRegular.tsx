import * as React from 'react';
import IconProps from '../IconProps';

export const TabSweepRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.14185 5.75C3.14185 4.23122 4.37306 3 5.89185 3H18.3918C19.9106 3 21.1418 4.23122 21.1418 5.75V12.1153C20.6807 11.8027 20.1772 11.5479 19.6418 11.3611V5.75C19.6418 5.05964 19.0822 4.5 18.3918 4.5H5.89185C5.20149 4.5 4.64185 5.05964 4.64185 5.75V18.25C4.64185 18.9404 5.20149 19.5 5.89185 19.5H11.3135C11.4858 20.0335 11.7253 20.5368 12.0218 21H5.89185C4.37306 21 3.14185 19.7688 3.14185 18.25V5.75Z"
      fill={color}
    />
    <path
      d="M23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM17.3536 15.3536C17.5488 15.1583 17.5488 14.8417 17.3536 14.6464C17.1583 14.4512 16.8417 14.4512 16.6464 14.6464L14.1464 17.1464C13.9512 17.3417 13.9512 17.6583 14.1464 17.8536L16.6464 20.3536C16.8417 20.5488 17.1583 20.5488 17.3536 20.3536C17.5488 20.1583 17.5488 19.8417 17.3536 19.6464L15.7071 18H20.5C20.7761 18 21 17.7761 21 17.5C21 17.2239 20.7761 17 20.5 17H15.7071L17.3536 15.3536Z"
      fill={color}
    />
  </svg>
);