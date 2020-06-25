import * as React from 'react';
import IconProps from '../IconProps';

export const CheckboxUncheckedRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_checkbox_unchecked_12_regular" fill={color} fill-rule="nonzero">
        <path
          d="M8.5,2 C9.27969882,2 9.920449,2.59488554 9.99313345,3.35553954 L10,3.5 L10,8.5 C10,9.27969882 9.40511446,9.920449 8.64446046,9.99313345 L8.5,10 L3.5,10 C2.72030118,10 2.079551,9.40511446 2.00686655,8.64446046 L2,8.5 L2,3.5 C2,2.72030118 2.59488554,2.079551 3.35553954,2.00686655 L3.5,2 L8.5,2 Z M8.5,3 L3.5,3 C3.22386,3 3,3.22386 3,3.5 L3,8.5 C3,8.77614 3.22386,9 3.5,9 L8.5,9 C8.77614,9 9,8.77614 9,8.5 L9,3.5 C9,3.22386 8.77614,3 8.5,3 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
