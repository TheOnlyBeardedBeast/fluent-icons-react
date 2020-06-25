import * as React from 'react';
import IconProps from '../IconProps';

export const RemoveFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_remove_12_filled" fill={color} fill-rule="nonzero">
        <rect id="🎨-Color" x="2" y="5.25" width="8" height="1.5" rx="0.75"></rect>
      </g>
    </g>
  </svg>
);
