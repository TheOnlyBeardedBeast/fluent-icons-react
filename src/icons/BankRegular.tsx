import * as React from 'react';
import IconProps from '../IconProps';

export const BankRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 5C7.58579 5 7.25 4.66421 7.25 4.25C7.25 3.83579 7.58579 3.5 8 3.5C8.41421 3.5 8.75 3.83579 8.75 4.25C8.75 4.66421 8.41421 5 8 5Z"
      fill={color}
    />
    <path
      d="M8.30615 1.10366C8.12644 0.965448 7.87623 0.965448 7.69652 1.10366L1.19515 6.10366C1.02544 6.23418 0.95766 6.45828 1.02659 6.66098C1.09552 6.86368 1.28587 7 1.49997 7H2V11.9995C1.7839 12.0107 1.59819 12.1604 1.54263 12.3716L1.01646 14.3716C0.977011 14.5215 1.00936 14.6813 1.10402 14.8041C1.19869 14.9269 1.34496 14.9988 1.5 14.9988H14.5027C14.6577 14.9988 14.804 14.9269 14.8986 14.8042C14.9933 14.6815 15.0257 14.5218 14.9864 14.3719L14.4615 12.3719C14.4056 12.1585 14.2168 12.0079 13.998 11.9992V7H14.5027C14.7168 7 14.9071 6.86368 14.9761 6.66098C15.045 6.45828 14.9772 6.23418 14.8075 6.10366L8.30615 1.10366ZM4 11.9988H3V7H4V11.9988ZM2.41165 12.9988H11V13H13.5925L13.8546 13.9988H2.14856L2.41165 12.9988ZM5 11.9988V7H6.5V11.9988H5ZM8.5 7V11.9988H7.5V7H8.5ZM11 11.9988H9.5V7H11V11.9988ZM12 11.9988V7H12.998V11.9988H12ZM13.0324 6H2.97027L8.00133 2.13077L13.0324 6Z"
      fill={color}
    />
  </svg>
);