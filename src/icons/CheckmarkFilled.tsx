import * as React from 'react';
import IconProps from '../IconProps';

export const CheckmarkFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_checkmark_12_filled" fill={color} fill-rule="nonzero">
        <path
          d="M4.94960124,7.88894106 L3.03033009,5.96966991 C2.73743687,5.6767767 2.26256313,5.6767767 1.96966991,5.96966991 C1.6767767,6.26256313 1.6767767,6.73743687 1.96966991,7.03033009 L4.46966991,9.53033009 C4.78152063,9.8421808 5.29382959,9.81894195 5.57616596,9.4801383 L10.576166,3.4801383 C10.841339,3.16193063 10.798346,2.6890071 10.4801383,2.42383404 C10.1619306,2.15866098 9.6890071,2.20165403 9.42383404,2.5198617 L4.94960124,7.88894106 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
