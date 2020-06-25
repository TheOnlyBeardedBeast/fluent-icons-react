import * as React from 'react';
import IconProps from '../IconProps';

export const PinRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.6051 2.38171C11.0384 1.42818 12.2908 1.20102 13.0314 1.94162L18.0615 6.97176C18.8021 7.71237 18.575 8.96472 17.6214 9.39804L13.1103 11.448C12.9837 11.5055 12.8868 11.6132 12.8428 11.7451L11.284 16.4215C11.2292 16.5859 11.0932 16.7102 10.9246 16.75C10.7559 16.7899 10.5787 16.7395 10.4561 16.617L7.27411 13.435L3.70711 17.002L3.7051 17H3.00205V16.2969L3 16.2949L6.567 12.7278L3.38506 9.5459C3.26252 9.42337 3.21217 9.24613 3.25199 9.07747C3.2918 8.90882 3.4161 8.77281 3.5805 8.71801L8.25884 7.15856C8.39075 7.11459 8.4984 7.01767 8.55593 6.89108L10.6051 2.38171ZM12.3243 2.64873C12.0774 2.40186 11.6599 2.47758 11.5155 2.79543L9.46633 7.30479C9.29375 7.68457 8.97081 7.97533 8.57506 8.10725L4.66423 9.41086L10.5912 15.3378L11.8942 11.4289C12.0261 11.0331 12.3168 10.7102 12.6966 10.5376L17.2077 8.48763C17.5256 8.34319 17.6013 7.92574 17.3544 7.67887L12.3243 2.64873Z"
      fill={color}
    />
  </svg>
);
