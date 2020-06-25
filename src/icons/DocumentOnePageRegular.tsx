import * as React from 'react';
import IconProps from '../IconProps';

export const DocumentOnePageRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 2H14C15.1046 2 16 2.89543 16 4L16 16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4C4 2.89543 4.89543 2 6 2ZM6 3C5.44772 3 5 3.44772 5 4V16C5 16.5523 5.44772 17 6 17H14C14.5523 17 15 16.5523 15 16L15 4C15 3.44771 14.5523 3 14 3L6 3Z"
      fill={color}
    />
    <path
      d="M13 6.5C13 6.74546 12.8231 6.94961 12.5899 6.99194L12.5 7H7.5C7.22386 7 7 6.77614 7 6.5C7 6.25454 7.17688 6.05039 7.41012 6.00806L7.5 6H12.5C12.7761 6 13 6.22386 13 6.5ZM13 10C13 10.2455 12.8231 10.4496 12.5899 10.4919L12.5 10.5H7.5C7.22386 10.5 7 10.2761 7 10C7 9.75454 7.17688 9.55039 7.41012 9.50806L7.5 9.5H12.5C12.7761 9.5 13 9.72386 13 10ZM13 13.5C13 13.7455 12.8231 13.9496 12.5899 13.9919L12.5 14H7.5C7.22386 14 7 13.7761 7 13.5C7 13.2545 7.17688 13.0504 7.41012 13.0081L7.5 13H12.5C12.7761 13 13 13.2239 13 13.5Z"
      fill={color}
    />
  </svg>
);
