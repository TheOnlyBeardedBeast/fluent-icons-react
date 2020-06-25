import * as React from 'react';
import IconProps from '../IconProps';

export const RemoveRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_remove_12_regular" fill={color} fill-rule="nonzero">
        <rect id="🎨-Color" x="2" y="5.5" width="8" height="1" rx="0.5"></rect>
      </g>
    </g>
  </svg>
);
