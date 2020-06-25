import * as React from 'react';
import IconProps from '../IconProps';

export const CubeFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.81635 1.03383C7.93558 0.98612 8.0686 0.986119 8.18784 1.03383L14.5048 3.56138L8.00016 6.16069L1.50604 3.55879L7.81635 1.03383Z"
      fill={color}
    />
    <path
      d="M1.00073 4.43361V11.8691C1.00073 12.0727 1.12419 12.256 1.31288 12.3325L7.5 14.8409V7.03757L1.00073 4.43361Z"
      fill={color}
    />
    <path
      d="M8.5 14.8411L14.6876 12.3325C14.8763 12.256 14.9998 12.0727 14.9998 11.8691L14.9998 4.4405L8.5 7.03784V14.8411Z"
      fill={color}
    />
  </svg>
);
