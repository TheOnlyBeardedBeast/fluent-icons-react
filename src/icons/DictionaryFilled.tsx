import * as React from 'react';
import IconProps from '../IconProps';

export const DictionaryFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_dictionary_20_filled" fill={color} fill-rule="nonzero">
        <path
          d="M14,2 C15.1046,2 16,2.89543 16,4 L16,4 L16,15 C16,15.5523 15.5523,16 15,16 L15,16 L5,16 C5,16.5523 5.44772,17 6,17 L6,17 L15.5,17 C15.7761,17 16,17.2239 16,17.5 C16,17.7761 15.7761,18 15.5,18 L15.5,18 L6,18 C4.89543,18 4,17.1046 4,16 L4,16 L4,4 C4,2.89543 4.89543,2 6,2 L6,2 Z M13.25,4.5 L6.75,4.5 C6.33579,4.5 6,4.83579 6,5.25 C6,5.66421 6.33579,6 6.75,6 L13.25,6 C13.6642,6 14,5.66421 14,5.25 C14,4.83579 13.6642,4.5 13.25,4.5 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
