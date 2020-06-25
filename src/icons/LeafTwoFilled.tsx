import * as React from 'react';
import IconProps from '../IconProps';

export const LeafTwoFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.1674 2C1.52267 2 1 2.52266 1 3.1674V6.17072C1 8.47414 2.86729 10.3414 5.17072 10.3414C5.219 10.3414 5.26708 10.3406 5.31497 10.339C5.11101 9.76397 5 9.14494 5 8.5C5 7.95565 5.07908 7.42977 5.22638 6.93322L4.14645 5.8536C3.95116 5.65837 3.95112 5.34179 4.14635 5.1465C4.34158 4.95121 4.65817 4.95116 4.85346 5.1464L5.63653 5.92925C6.22184 4.82423 7.17271 3.9426 8.32803 3.44549C7.56324 2.56023 6.4324 2 5.17072 2H2.1674Z"
      fill={color}
    />
    <path
      d="M6.98444 11.3093L5.20149 13.0936C5.0063 13.289 5.00642 13.6055 5.20175 13.8007C5.39709 13.9959 5.71367 13.9958 5.90886 13.8005L7.69165 12.0163C8.46141 12.6319 9.43772 13 10.5 13C12.9853 13 15 10.9853 15 8.5V5.22727C15 4.54947 14.4505 4 13.7727 4L10.5 4C8.01472 4 6 6.01472 6 8.5C6 9.56273 6.36839 10.5394 6.98444 11.3093ZM10.8566 8.84899L8.40305 11.3025C8.13507 11.1017 7.89684 10.8633 7.69616 10.5952L10.1495 8.14188C10.3448 7.94662 10.6613 7.94662 10.8566 8.14188C11.0519 8.33715 11.0519 8.65373 10.8566 8.84899Z"
      fill={color}
    />
  </svg>
);
