import * as React from 'react';
import IconProps from '../IconProps';

export const DocumentWidthFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.99976 2.00024H13.9998C15.1043 2.00024 15.9998 2.89567 15.9998 4.00025V6.33579C15.7645 6.41869 15.5468 6.56147 15.3708 6.76249C15.0629 7.1145 14.9489 7.56994 15.0203 7.99799L14.5008 7.99747H14.4998C13.6714 7.99747 12.9998 8.66899 12.9998 9.49747C12.9998 10.3256 13.6709 10.9969 14.4987 10.9975L15.021 10.998C14.9481 11.4273 15.062 11.8849 15.371 12.238C15.5469 12.439 15.7646 12.5818 15.9998 12.6646V16.0002C15.9998 17.1048 15.1043 18.0002 13.9998 18.0002H5.99976C4.89519 18.0002 3.99976 17.1048 3.99976 16.0002V12.6647C4.23508 12.5818 4.45294 12.439 4.62895 12.2379C4.93689 11.8859 5.05087 11.4304 4.97945 11.0024L5.49899 11.0029H5.5C6.32833 11.0029 7 10.3314 7 9.5029C7 8.67474 6.32887 8.00344 5.50101 8.0029L4.97872 8.00237C5.05164 7.57305 4.93774 7.11551 4.62877 6.76233C4.4528 6.56127 4.23501 6.41852 3.99976 6.33567V4.00024C3.99976 2.89568 4.89519 2.00024 5.99976 2.00024Z"
      fill={color}
    />
    <path
      d="M3.87605 7.421C4.05789 7.62882 4.03683 7.9447 3.82901 8.12654L2.83046 9.00028H5.49976C5.7759 9.00028 5.99976 9.22413 5.99976 9.50027C5.99976 9.77642 5.7759 10.0003 5.49976 10.0003H2.83051L3.82901 10.874C4.03683 11.0558 4.05789 11.3717 3.87605 11.5795C3.69421 11.7873 3.37833 11.8084 3.17051 11.6265L1.17051 9.87654C1.062 9.78159 0.999756 9.64443 0.999756 9.50025C0.999756 9.35607 1.062 9.21891 1.17051 9.12396L3.17051 7.37396C3.37833 7.19212 3.69421 7.21318 3.87605 7.421Z"
      fill={color}
    />
    <path
      d="M17.1691 10.0003L16.1705 10.874C15.9627 11.0558 15.9417 11.3717 16.1235 11.5795C16.3054 11.7873 16.6212 11.8084 16.8291 11.6265L18.8291 9.87653C18.9376 9.78159 18.9998 9.64443 18.9998 9.50025C18.9998 9.35607 18.9376 9.2189 18.8291 9.12396L16.8291 7.37396C16.6212 7.19212 16.3054 7.21318 16.1235 7.42099C15.9417 7.62881 15.9627 7.94469 16.1705 8.12654L17.1691 9.00025L14.4998 8.99755C14.2237 8.99755 13.9998 9.22141 13.9998 9.49755C13.9998 9.7737 14.2237 9.99755 14.4998 9.99755L17.1691 10.0003Z"
      fill={color}
    />
  </svg>
);
