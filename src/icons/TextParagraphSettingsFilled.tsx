import * as React from 'react';
import IconProps from '../IconProps';

export const TextParagraphSettingsFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 7C11.567 7 10 8.567 10 10.5C10 12.433 11.567 14 13.5 14H14V17.5C14 17.7761 14.2239 18 14.5 18C14.7761 18 15 17.7761 15 17.5V8H16V17.5C16 17.7761 16.2239 18 16.5 18C16.7761 18 17 17.7761 17 17.5V8H17.5C17.7761 8 18 7.77614 18 7.5C18 7.22386 17.7761 7 17.5 7H13.5Z"
      fill={color}
    />
    <path
      d="M2.5 5C2.22386 5 2 5.22386 2 5.5C2 5.77614 2.22386 6 2.5 6H17.5C17.7761 6 18 5.77614 18 5.5C18 5.22386 17.7761 5 17.5 5H2.5Z"
      fill={color}
    />
    <path
      d="M9.25606 9H2.5C2.22386 9 2 9.22386 2 9.5C2 9.77614 2.22386 10 2.5 10H9.02746C9.06579 9.65327 9.14352 9.31841 9.25606 9Z"
      fill={color}
    />
    <path
      d="M9.75777 13H2.5C2.22386 13 2 13.2239 2 13.5C2 13.7761 2.22386 14 2.5 14H10.6713C10.319 13.7149 10.0106 13.3776 9.75777 13Z"
      fill={color}
    />
  </svg>
);
