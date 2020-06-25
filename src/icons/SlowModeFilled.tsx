import * as React from 'react';
import IconProps from '../IconProps';

export const SlowModeFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.34275 3.98886C5.4867 3.98886 4.31102 5.3048 3.85953 6.79651L3.79905 6.99634H2.49719C2.22105 6.99634 1.99719 7.2202 1.99719 7.49634C1.99719 8.18179 2.18673 8.82435 2.51917 9.30946C2.63615 9.48017 2.77529 9.63659 2.9338 9.76749L2.63544 10.4922C2.40531 11.0511 2.67191 11.6907 3.23084 11.9208C3.36301 11.9752 3.50455 12.0032 3.64748 12.0032H4.72056C5.14452 12.0032 5.53036 11.7584 5.71087 11.3747L6.01439 10.7297C6.92613 10.8472 7.84795 10.847 8.75967 10.7292L9.06342 11.3747C9.24393 11.7584 9.62977 12.0032 10.0537 12.0032H11.1161C11.2592 12.0032 11.401 11.9752 11.5333 11.9206C12.0921 11.6902 12.3584 11.0505 12.1279 10.4916L11.926 10.0018H12.891C13.5085 10.0018 14.0029 9.47743 14.0029 8.86986V8.25012C14.0029 7.30943 13.2695 6.5 12.3127 6.5H10.8487C10.3156 5.11485 9.05597 3.98886 7.34275 3.98886ZM11.5875 9.00184L11.1538 7.5H12.3127C12.6706 7.5 13.0029 7.81385 13.0029 8.25012V8.86986C13.0029 8.90323 12.9891 8.93833 12.9619 8.96622C12.9344 8.99446 12.9071 9.00184 12.891 9.00184H11.5875ZM9.77926 10.5473C10.1675 10.4586 10.5525 10.3482 10.9326 10.2159L11.2034 10.8728C11.2233 10.921 11.2004 10.9762 11.1521 10.9961C11.1407 11.0008 11.1285 11.0032 11.1161 11.0032H10.0537C10.0171 11.0032 9.98383 10.9821 9.96826 10.949L9.77926 10.5473ZM3.83166 10.2134C4.2149 10.3472 4.60313 10.4587 4.99469 10.548L4.80603 10.949C4.79046 10.9821 4.75717 11.0032 4.72056 11.0032H3.64748C3.63514 11.0032 3.62292 11.0008 3.61151 10.9961C3.56326 10.9762 3.54029 10.9211 3.56013 10.8729L3.83166 10.2134ZM3.49638 7.99634L3.29376 8.6658C3.18343 8.48232 3.09545 8.25476 3.04481 7.99634H3.49638Z"
      fill={color}
    />
  </svg>
);