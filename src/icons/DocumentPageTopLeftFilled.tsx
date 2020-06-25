import * as React from 'react';
import IconProps from '../IconProps';

export const DocumentPageTopLeftFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.75333 5.50242L8.53363 7.00242H7.2943L7.514 5.50242H8.75333Z" fill={color} />
    <path
      d="M5.5 2C4.67157 2 4 2.67157 4 3.5V16.5C4 17.3284 4.67157 18 5.5 18H14.5C15.3284 18 16 17.3284 16 16.5L16 3.5C16 2.67157 15.3284 2 14.5 2H5.5ZM6.07246 8.44422L6.13717 8.00242H5.5C5.22386 8.00242 5 7.77856 5 7.50242C5 7.22628 5.22386 7.00242 5.5 7.00242H6.28363L6.50333 5.50242H6C5.72386 5.50242 5.5 5.27856 5.5 5.00242C5.5 4.72628 5.72386 4.50242 6 4.50242H6.64979L6.80721 3.42763C6.84723 3.1544 7.10117 2.96535 7.37439 3.00537C7.64762 3.04539 7.83667 3.29932 7.79666 3.57255L7.66046 4.50242H8.89979L9.05721 3.42763C9.09723 3.1544 9.35117 2.96535 9.62439 3.00537C9.89762 3.04539 10.0867 3.29932 10.0467 3.57255L9.91046 4.50242H10.5C10.7761 4.50242 11 4.72628 11 5.00242C11 5.27856 10.7761 5.50242 10.5 5.50242H9.764L9.5443 7.00242H10C10.2761 7.00242 10.5 7.22628 10.5 7.50242C10.5 7.77856 10.2761 8.00242 10 8.00242H9.39784L9.3119 8.58914C9.27188 8.86237 9.01795 9.05142 8.74472 9.0114C8.47149 8.97138 8.28244 8.71745 8.32246 8.44422L8.38717 8.00242H7.14784L7.0619 8.58914C7.02188 8.86237 6.76795 9.05142 6.49472 9.0114C6.22149 8.97138 6.03244 8.71745 6.07246 8.44422Z"
      fill={color}
    />
  </svg>
);
