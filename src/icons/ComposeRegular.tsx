import * as React from 'react';
import IconProps from '../IconProps';

export const ComposeRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_compose_20_regular" fill={color} fill-rule="nonzero">
        <path
          d="M11.5,4 C11.7761424,4 12,4.22385763 12,4.5 C12,4.77614237 11.7761424,5 11.5,5 L6.5,5 C5.67157288,5 5,5.67157288 5,6.5 L5,13.5 C5,14.3284271 5.67157288,15 6.5,15 L13.5,15 C14.3284271,15 15,14.3284271 15,13.5 L15,8.5 C15,8.22385763 15.2238576,8 15.5,8 C15.7761424,8 16,8.22385763 16,8.5 L16,13.5 C16,14.8807119 14.8807119,16 13.5,16 L6.5,16 C5.11928813,16 4,14.8807119 4,13.5 L4,6.5 C4,5.11928813 5.11928813,4 6.5,4 L11.5,4 Z M16.1513979,2.85355339 C16.34666,2.65829124 16.6632425,2.65829124 16.8585047,2.85355339 C17.0537668,3.04881554 17.0537668,3.36539803 16.8585047,3.56066017 L16.8585047,3.56066017 L9.78743687,10.631728 L8.90355339,10.8085047 L9.08033009,9.9246212 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
