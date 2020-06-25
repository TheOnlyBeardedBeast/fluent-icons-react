import * as React from 'react';
import IconProps from '../IconProps';

export const MailUnsubscribeFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.28034 2.21968C2.98745 1.92678 2.51257 1.92677 2.21968 2.21966C1.92678 2.51255 1.92677 2.98743 2.21966 3.28032L3.4698 4.53049C2.67033 5.05488 2.11605 5.92231 2.01619 6.92355L10.0942 11.1551L12.5157 13.5765L12.348 13.6644C12.13 13.7786 11.87 13.7786 11.652 13.6644L2 8.60801V16.75L2.00514 16.9344C2.10075 18.6436 3.51697 20 5.25 20H18.75L18.9339 19.9949L20.7194 21.7805C21.0123 22.0734 21.4872 22.0734 21.7801 21.7805C22.073 21.4876 22.073 21.0127 21.7801 20.7198L3.28034 2.21968Z"
      fill={color}
    />
    <path
      d="M15.2998 12.118L21.5621 18.3804C21.8405 17.9012 22 17.3442 22 16.75V8.60801L15.2998 12.118Z"
      fill={color}
    />
    <path
      d="M7.18195 4.00001L14.1887 11.0069L21.9838 6.92355C21.8201 5.28192 20.4347 4.00001 18.75 4.00001H7.18195Z"
      fill={color}
    />
  </svg>
);
