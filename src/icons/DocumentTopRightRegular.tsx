import * as React from 'react';
import IconProps from '../IconProps';

export const DocumentTopRightRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.07246 9.44422C9.03244 9.71745 9.22149 9.97138 9.49472 10.0114C9.76795 10.0514 10.0219 9.86237 10.0619 9.58914L10.1478 9.00242H11.3872L11.3225 9.44422C11.2824 9.71745 11.4715 9.97138 11.7447 10.0114C12.0179 10.0514 12.2719 9.86237 12.3119 9.58914L12.3978 9.00242H13C13.2761 9.00242 13.5 8.77856 13.5 8.50242C13.5 8.22628 13.2761 8.00242 13 8.00242H12.5443L12.764 6.50242H13.5C13.7761 6.50242 14 6.27856 14 6.00242C14 5.72628 13.7761 5.50242 13.5 5.50242H12.9105L13.0467 4.57255C13.0867 4.29932 12.8976 4.04539 12.6244 4.00537C12.3512 3.96535 12.0972 4.1544 12.0572 4.42763L11.8998 5.50242H10.6605L10.7967 4.57255C10.8367 4.29932 10.6476 4.04539 10.3744 4.00537C10.1012 3.96535 9.84723 4.1544 9.80721 4.42763L9.64979 5.50242H9C8.72386 5.50242 8.5 5.72628 8.5 6.00242C8.5 6.27856 8.72386 6.50242 9 6.50242H9.50333L9.28363 8.00242H8.5C8.22386 8.00242 8 8.22628 8 8.50242C8 8.77856 8.22386 9.00242 8.5 9.00242H9.13717L9.07246 9.44422ZM11.7533 6.50242L11.5336 8.00242H10.2943L10.514 6.50242H11.7533Z"
      fill={color}
    />
    <path
      d="M6 2C4.89543 2 4 2.89543 4 4V16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16L16 4C16 2.89543 15.1046 2 14 2H6ZM6 3L14 3C14.5523 3 15 3.44771 15 4L15 16C15 16.5523 14.5523 17 14 17H6C5.44772 17 5 16.5523 5 16V4C5 3.44772 5.44772 3 6 3Z"
      fill={color}
    />
  </svg>
);
