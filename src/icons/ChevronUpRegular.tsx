import * as React from 'react';
import IconProps from '../IconProps';

export const ChevronUpRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_chevron_up_12_regular" fill={color} fill-rule="nonzero">
        <path
          d="M2.64645,7.35355 C2.84171,7.54882 3.15829,7.54882 3.35355,7.35355 L5.9999975,4.70711 L8.64645,7.35355 C8.84171,7.54882 9.15829,7.54882 9.35355,7.35355 C9.54882,7.15829 9.54882,6.84171 9.35355,6.64645 L6.35355,3.64645 C6.15829,3.45118 5.84171,3.45118 5.64645,3.64645 L2.64645,6.64645 C2.45118,6.84171 2.45118,7.15829 2.64645,7.35355 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
