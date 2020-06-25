import * as React from 'react';
import IconProps from '../IconProps';

export const DocumentLandscapeRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 14C18 15.1046 17.1046 16 16 16L4 16C2.89543 16 2 15.1046 2 14L2 6C2 4.89543 2.89543 4 4 4L12.5858 4C12.9836 4 13.3651 4.15804 13.6464 4.43934L17.5607 8.35355C17.842 8.63486 18 9.01639 18 9.41421V14ZM16 15C16.5523 15 17 14.5523 17 14V10H13.5C12.6716 10 12 9.32843 12 8.5V5L4 5C3.44772 5 3 5.44771 3 6L3 14C3 14.5523 3.44771 15 4 15L16 15ZM13 5.20711V8.5C13 8.77614 13.2239 9 13.5 9H16.7929L13 5.20711Z"
      fill={color}
    />
  </svg>
);
