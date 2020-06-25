import * as React from 'react';
import IconProps from '../IconProps';

export const CallMissedFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.9339 5.65961C18.9743 3.92913 15.9128 3.06659 11.7495 3.07192C7.59228 3.07735 4.62325 3.94518 2.84247 5.67547C2.08816 6.40838 1.81345 7.49426 2.12129 8.52608L2.43056 9.56271C2.71915 10.53 3.69249 11.176 4.70765 11.0739L6.74217 10.8694C7.6155 10.7815 8.30505 10.1582 8.45329 9.32249L8.84436 7.11775C9.81256 6.67892 10.8594 6.44305 11.9847 6.41015C13.1101 6.37725 14.1401 6.55241 15.0745 6.93562L15.7059 9.29085C15.9328 10.1372 16.6926 10.7706 17.5843 10.8568L19.6307 11.0545C20.659 11.1539 21.5666 10.5016 21.7515 9.53031L21.9489 8.49374C22.1446 7.46591 21.7585 6.38777 20.9339 5.65961Z"
      fill={color}
    />
    <path
      d="M11.75 14C12.1642 14 12.5 14.3358 12.5 14.75V16.5H13.5C13.9142 16.5 14.25 16.8358 14.25 17.25C14.25 17.6642 13.9142 18 13.5 18H11.7501C11.3358 18 11 17.6642 11 17.25V14.75C11 14.3358 11.3358 14 11.75 14Z"
      fill={color}
    />
    <path
      d="M12 11C8.96243 11 6.5 13.4624 6.5 16.5C6.5 19.5376 8.96243 22 12 22C15.0376 22 17.5 19.5376 17.5 16.5C17.5 13.4624 15.0376 11 12 11ZM8 16.5C8 14.2909 9.79086 12.5 12 12.5C14.2091 12.5 16 14.2909 16 16.5C16 18.7091 14.2091 20.5 12 20.5C9.79086 20.5 8 18.7091 8 16.5Z"
      fill={color}
    />
  </svg>
);