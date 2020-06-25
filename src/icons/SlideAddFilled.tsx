import * as React from 'react';
import IconProps from '../IconProps';

export const SlideAddFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.75 4C3.23122 4 2 5.23122 2 6.75V17.25C2 18.7688 3.23122 20 4.75 20H11.4982C11.1772 19.2304 11 18.3859 11 17.5C11 13.9101 13.9101 11 17.5 11C19.2465 11 20.8321 11.6888 22 12.8096V6.75C22 5.23122 20.7688 4 19.25 4H4.75Z"
      fill={color}
    />
    <path
      d="M23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23C20.5376 23 23 20.5376 23 17.5ZM18.0006 18L18.0011 20.5035C18.0011 20.7797 17.7773 21.0035 17.5011 21.0035C17.225 21.0035 17.0011 20.7797 17.0011 20.5035L17.0006 18H14.4961C14.22 18 13.9961 17.7762 13.9961 17.5C13.9961 17.2239 14.22 17 14.4961 17H17.0005L17 14.4993C17 14.2231 17.2239 13.9993 17.5 13.9993C17.7761 13.9993 18 14.2231 18 14.4993L18.0005 17H20.503C20.7792 17 21.003 17.2239 21.003 17.5C21.003 17.7762 20.7792 18 20.503 18H18.0006Z"
      fill={color}
    />
  </svg>
);
