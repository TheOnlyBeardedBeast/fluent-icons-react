import * as React from 'react';
import IconProps from '../IconProps';

export const FavoritesFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5189 2.34819L12.2306 6.0298L12.2166 6.03299C11.5382 6.18298 11.0664 6.71608 11.0065 7.36034L11 7.5C11 8.23096 11.5229 8.83981 12.215 8.97295L12.3556 8.99313L12.5 9L12.365 9.00682L12.2166 9.03299C11.4898 9.19369 11 9.7942 11 10.5C11 11.231 11.5229 11.8398 12.215 11.973L12.3556 11.9931L12.5 12L12.365 12.0068L12.2166 12.033C11.5382 12.183 11.0664 12.7161 11.0065 13.3603L11 13.5V15L5.74169 17.9241C5.30675 18.1667 4.79806 17.7753 4.88154 17.262L5.69646 12.2523L2.25758 8.70682C1.90529 8.34358 2.09958 7.71008 2.58612 7.6356L7.33544 6.90856L9.45576 2.34819C9.67296 1.88101 10.3017 1.88101 10.5189 2.34819ZM17.5 13C17.7762 13 18 13.2239 18 13.5C18 13.7531 17.8119 13.9623 17.5679 13.9954L17.5 14H12.5C12.2239 14 12 13.7761 12 13.5C12 13.2469 12.1881 13.0377 12.4322 13.0046L12.5 13H17.5ZM17.5 10C17.7762 10 18 10.2239 18 10.5C18 10.7531 17.8119 10.9623 17.5679 10.9954L17.5 11H12.5C12.2239 11 12 10.7761 12 10.5C12 10.2469 12.1881 10.0377 12.4322 10.0046L12.5 10H17.5ZM17.5 7C17.7762 7 18 7.22386 18 7.5C18 7.75313 17.8119 7.96233 17.5679 7.99543L17.5 8H12.5C12.2239 8 12 7.77614 12 7.5C12 7.24687 12.1881 7.03767 12.4322 7.00456L12.5 7H17.5Z"
      fill={color}
    />
  </svg>
);
