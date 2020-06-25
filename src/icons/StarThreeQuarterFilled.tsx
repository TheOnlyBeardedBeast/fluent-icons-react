import * as React from 'react';
import IconProps from '../IconProps';

export const StarThreeQuarterFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.01576 11.0441C2.74372 11.0187 2.5157 10.7669 2.56824 10.4606L3.08509 7.4471L0.895681 5.31296C0.598923 5.02369 0.762677 4.5197 1.17279 4.46011L4.19847 4.02045L5.5516 1.27872C5.64367 1.09217 5.82305 0.999265 6.00209 1C6.17973 1.00072 6.35705 1.09362 6.4484 1.27872L7.80153 4.02045L10.8272 4.46011C11.2373 4.5197 11.4011 5.02369 11.1043 5.31296L8.91491 7.4471L9.43176 10.4606C9.50182 10.869 9.0731 11.1805 8.70629 10.9877L6.00003 9.56489M6.99994 8.96079L8.27489 9.63108L7.88487 7.35707C7.85705 7.19487 7.91082 7.02937 8.02867 6.9145L9.68083 5.30403L7.39759 4.97226C7.23474 4.9486 7.09396 4.84631 7.02113 4.69874L6.99994 4.65581V8.96079Z"
      fill={color}
    />
  </svg>
);