import * as React from 'react';
import IconProps from '../IconProps';

export const TabTrackingPreventionFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 5.75C3 4.23122 4.23122 3 5.75 3H14.25C15.7688 3 17 4.23122 17 5.75V8.23188C16.6647 8.03743 16.3342 7.77325 16.0057 7.43045C15.8584 7.2767 15.6852 7.16413 15.5 7.09276V5.75C15.5 5.05964 14.9404 4.5 14.25 4.5H5.75C5.05964 4.5 4.5 5.05964 4.5 5.75V14.25C4.5 14.9404 5.05964 15.5 5.75 15.5H10.5712C10.7497 15.9026 10.9711 16.2821 11.2369 16.636C11.3313 16.7615 11.4305 16.8829 11.5344 17H5.75C4.23122 17 3 15.7688 3 14.25V5.75Z"
      fill={color}
    />
    <path
      d="M18.6 9.66667C17.3751 9.66667 16.2758 9.15761 15.2837 8.12231C15.1276 7.95936 14.8741 7.95921 14.7178 8.12198C13.7233 9.15752 12.6234 9.66667 11.4 9.66667C11.1791 9.66667 11 9.85322 11 10.0833V12.5844L11.0036 12.8258C11.0807 15.376 12.3906 17.1165 14.8735 17.9786C14.9556 18.0071 15.0444 18.0071 15.1265 17.9786C17.687 17.0896 19 15.2663 19 12.5844V10.0833L18.9936 10.0084C18.9597 9.81406 18.7964 9.66667 18.6 9.66667ZM13.6402 11.1098L15 12.4696L16.3548 11.1147C16.5013 10.9683 16.7387 10.9683 16.8852 11.1147C17.0316 11.2612 17.0316 11.4986 16.8852 11.645L15.5303 13L16.8852 14.3548C17.0316 14.5013 17.0316 14.7387 16.8852 14.8852C16.7387 15.0316 16.5013 15.0316 16.3548 14.8852L15 13.5303L13.6452 14.8852C13.4987 15.0316 13.2613 15.0316 13.1148 14.8852C12.9684 14.7387 12.9684 14.5013 13.1148 14.3548L14.4696 13L13.1098 11.6402C12.9634 11.4937 12.9634 11.2563 13.1098 11.1098C13.2563 10.9634 13.4937 10.9634 13.6402 11.1098Z"
      fill={color}
    />
  </svg>
);
