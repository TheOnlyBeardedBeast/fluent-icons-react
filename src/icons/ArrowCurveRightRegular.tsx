import * as React from 'react';
import IconProps from '../IconProps';

export const ArrowCurveRightRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 9C4 6.23858 6.23858 4 9 4H13.5C13.7761 4 14 4.22386 14 4.5C14 4.77614 13.7761 5 13.5 5H9C6.79086 5 5 6.79086 5 9C5 11.2091 6.79086 13 9 13H14.293L11.5938 10.3008C11.3985 10.1056 11.3985 9.78897 11.5938 9.59371C11.7891 9.39845 12.1056 9.39845 12.3009 9.59371L15.8399 13.1327C15.9744 13.2673 16.0163 13.4594 15.9654 13.6298C15.9457 13.7203 15.9007 13.8064 15.8304 13.8768L12.297 17.4102C12.1017 17.6054 11.7851 17.6054 11.5899 17.4102C11.3946 17.2149 11.3946 16.8983 11.5899 16.703L14.2929 14H9C6.23858 14 4 11.7614 4 9Z"
      fill={color}
    />
  </svg>
);
