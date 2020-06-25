import * as React from 'react';
import IconProps from '../IconProps';

export const PaintBrushFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 1.00201V3.50208C8 3.77822 8.22386 4.00208 8.5 4.00208C8.77614 4.00208 9 3.77822 9 3.50208V1.00201H10V4.496C10 4.77214 10.2239 4.996 10.5 4.996C10.7761 4.996 11 4.77214 11 4.496V1.00201H12.5V6H3.5V1.00201H8Z"
      fill={color}
    />
    <path
      d="M3.5 7V7.5C3.5 8.60457 4.39543 9.5 5.5 9.5H6.5V13.4991C6.5 14.3275 7.17157 14.9991 8 14.9991C8.82843 14.9991 9.5 14.3275 9.5 13.4991V9.5H10.5C11.6046 9.5 12.5 8.60457 12.5 7.5V7H3.5Z"
      fill={color}
    />
  </svg>
);
