import * as React from 'react';
import IconProps from '../IconProps';

export const DeleteOffRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 4H3.29288L2.14645 2.85357C1.95118 2.65831 1.95118 2.34172 2.14645 2.14646C2.34171 1.9512 2.65829 1.9512 2.85355 2.14646L8.26047 7.55338C8.26046 7.55338 8.26048 7.55337 8.26047 7.55338L17.8536 17.1465C18.0488 17.3417 18.0488 17.6583 17.8536 17.8536C17.6583 18.0488 17.3417 18.0488 17.1464 17.8536L15.1885 15.8956L15.1499 16.2292C15.0335 17.2384 14.179 18 13.1631 18H6.83688C5.821 18 4.9665 17.2384 4.85006 16.2292L3.553 5H3C2.75454 5 2.55039 4.82312 2.50806 4.58988L2.5 4.5C2.5 4.22386 2.72386 4 3 4ZM14.2859 14.9929L12 12.7071V14.0625C12 14.3041 11.7761 14.5 11.5 14.5C11.2545 14.5 11.0504 14.3452 11.0081 14.1411L11 14.0625V11.7071L9 9.70709V14.0625C9 14.3041 8.77614 14.5 8.5 14.5C8.25454 14.5 8.05039 14.3452 8.00806 14.1411L8 14.0625V8.70709L4.59597 5.30306L5.84347 16.1146C5.90169 16.6192 6.32894 17 6.83688 17H13.1631C13.6711 17 14.0983 16.6192 14.1565 16.1146L14.2859 14.9929Z"
      fill={color}
    />
    <path
      d="M15.4811 13.3598L14.5783 12.4569L15.438 5H7.12134L6.12134 4H7.5C7.5 2.61929 8.61929 1.5 10 1.5C11.3807 1.5 12.5 2.61929 12.5 4H17C17.2761 4 17.5 4.22386 17.5 4.5C17.5 4.77614 17.2761 5 17 5H16.446L15.4811 13.3598ZM11.5 4C11.5 3.17157 10.8284 2.5 10 2.5C9.17157 2.5 8.5 3.17157 8.5 4H11.5Z"
      fill={color}
    />
    <path
      d="M12 9.87866L11 8.87866V7.9375C11 7.69588 11.2239 7.5 11.5 7.5C11.7455 7.5 11.9496 7.65477 11.9919 7.85886L12 7.9375V9.87866Z"
      fill={color}
    />
  </svg>
);
