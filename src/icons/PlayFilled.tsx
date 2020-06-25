import * as React from 'react';
import IconProps from '../IconProps';

export const PlayFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_play_20_filled" fill={color} fill-rule="nonzero">
        <path
          d="M3,4.60441299 L3,15.2848762 C3,16.2513745 3.78350169,17.0348762 4.75,17.0348762 C5.05213089,17.0348762 5.3491154,16.9566549 5.61204688,16.8078257 L15.7203424,11.086149 C16.5614442,10.6100536 16.8573404,9.54225439 16.3812451,8.70115261 C16.2076333,8.39443849 15.945457,8.14729182 15.6290393,7.99206803 L5.52074374,3.03328152 C4.65303179,2.60761151 3.60453855,2.9659573 3.17886853,3.83366925 C3.06118659,4.07355938 3,4.33721211 3,4.60441299 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
