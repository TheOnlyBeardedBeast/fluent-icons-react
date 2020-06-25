import * as React from 'react';
import IconProps from '../IconProps';

export const ColorLineRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.09805 12H4C2.89543 12 2 12.8954 2 14V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V14C18 12.8954 17.1046 12 16 12H10.696L10.1255 12.573C9.9568 12.7424 9.76543 12.8859 9.5578 13H16C16.5523 13 17 13.4477 17 14V16C17 16.5523 16.5523 17 16 17H4C3.44772 17 3 16.5523 3 16V14C3 13.4477 3.44772 13 4 13H4.07946C4.01989 12.8162 3.99512 12.6175 4.01305 12.4121L4.01668 12.3705L4.04515 12.2051L4.09805 12Z"
      fill={color}
    />
    <path
      d="M12.1738 2.62128C13.0137 1.77817 14.3531 1.73554 15.2434 2.4952L15.3735 2.61517L15.5 2.75176C16.2243 3.60031 16.2243 4.8549 15.5 5.70345L15.3796 5.83394L9.41679 11.823C9.26177 11.9787 9.07495 12.0978 8.86993 12.1729L8.71296 12.2209L5.62742 12.9811C5.28832 13.0647 4.98028 12.7861 5.00921 12.4546L5.02364 12.3708L5.81563 9.29999C5.869 9.09308 5.96579 8.90056 6.09889 8.73494L6.20542 8.61597L12.1738 2.62128ZM14.6678 3.32362C14.2067 2.86432 13.4796 2.83503 12.9846 3.2348L12.8823 3.32703L6.91387 9.32172C6.87198 9.36378 6.83808 9.41278 6.81355 9.46632L6.78394 9.54973L6.20066 11.8097L8.47372 11.2499C8.51322 11.2402 8.55119 11.2257 8.58686 11.2069L8.63855 11.1756L8.70833 11.1173L14.6712 5.12818C15.1672 4.63025 15.1672 3.82496 14.6678 3.32362Z"
      fill={color}
    />
  </svg>
);