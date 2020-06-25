import * as React from 'react';
import IconProps from '../IconProps';

export const DictionaryRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_dictionary_20_regular" fill={color} fill-rule="nonzero">
        <path
          d="M14,2 C15.0543909,2 15.9181678,2.81587733 15.9945144,3.85073759 L16,4 L16,15 C16,15.51285 15.613973,15.9355092 15.1166239,15.9932725 L15,16 L5,16 C5,16.51285 5.38604429,16.9355092 5.88337975,16.9932725 L6,17 L15.5,17 C15.7761,17 16,17.2239 16,17.5 C16,17.7454222 15.8230914,17.9496 15.5898645,17.9919429 L15.5,18 L6,18 C4.94563773,18 4.08183483,17.18415 4.00548573,16.1492661 L4,16 L4,4 C4,2.94563773 4.81587733,2.08183483 5.85073759,2.00548573 L6,2 L14,2 Z M14,3 L6,3 C5.44772,3 5,3.44772 5,4 L5,15 L15,15 L15,4 C15,3.44772 14.5523,3 14,3 Z M13,4 C13.5523,4 14,4.44772 14,5 L14,6 C14,6.55228 13.5523,7 13,7 L7,7 C6.44772,7 6,6.55228 6,6 L6,5 C6,4.44772 6.44772,4 7,4 L13,4 Z M13,5 L7,5 L7,6 L13,6 L13,5 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
