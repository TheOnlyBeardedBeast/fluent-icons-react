import * as React from 'react';
import IconProps from '../IconProps';

export const TextItalicRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_text_italic_20_regular" fill={color} fill-rule="nonzero">
        <path
          d="M16,3 C16.2761,3 16.5,3.22386 16.5,3.5 C16.5,3.77614 16.2761,4 16,4 L12.843,4 L8.227,16 L11.5,16 C11.7761,16 12,16.2239 12,16.5 C12,16.7761 11.7761,17 11.5,17 L4,17 C3.72386,17 3.5,16.7761 3.5,16.5 C3.5,16.2239 3.72386,16 4,16 L7.156,16 L11.771,4 L8.5,4 C8.22386,4 8,3.77614 8,3.5 C8,3.22386 8.22386,3 8.5,3 L16,3 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
