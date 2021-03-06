import * as React from 'react';
import IconProps from '../IconProps';

export const DocumentFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_document_20_filled" fill={color} fill-rule="nonzero">
        <path
          d="M10,2 L10,6.5 C10,7.32843 10.6716,8 11.5,8 L16,8 L16,16.5 C16,17.3284 15.3284,18 14.5,18 L5.5,18 C4.67157,18 4,17.3284 4,16.5 L4,3.5 C4,2.67157 4.67157,2 5.5,2 L10,2 Z M11,2.25 L15.75,7 L11.5,7 C11.2545778,7 11.0504,6.82312296 11.0080571,6.58987501 L11,6.5 L11,2.25 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
