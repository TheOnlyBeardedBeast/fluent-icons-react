import * as React from 'react';
import IconProps from '../IconProps';

export const BeakerFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.99998 3V6.68895C5.99998 7.13159 5.88246 7.56629 5.65943 7.94863L5.04612 9H10.9538L10.3405 7.94863C10.1175 7.56629 9.99998 7.13159 9.99998 6.68895V3H10.5C10.7761 3 11 2.77614 11 2.5C11 2.22386 10.7761 2 10.5 2H5.49997C5.22383 2 4.99997 2.22386 4.99997 2.5C4.99997 2.77614 5.22383 3 5.49997 3H5.99998Z"
      fill={color}
    />
    <path
      d="M11.5372 10H4.46278L3.44536 11.7441C2.86203 12.7441 3.58334 13.9999 4.74103 13.9999H11.2589C12.4166 13.9999 13.1379 12.7441 12.5546 11.7441L11.5372 10Z"
      fill={color}
    />
  </svg>
);
