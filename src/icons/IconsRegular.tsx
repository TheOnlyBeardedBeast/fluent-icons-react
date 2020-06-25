import * as React from 'react';
import IconProps from '../IconProps';

export const IconsRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.75 3C9.23122 3 8 4.23122 8 5.75C8 6.7292 8.51143 7.58932 9.28411 8.07723C9.47235 8.19609 9.55933 8.4251 9.49746 8.63895C9.43559 8.85281 9.23978 9 9.01716 9H3.35714C3.1599 9 3 9.1599 3 9.35714C3 11.9213 5.07868 14 7.64286 14H9.7541C9.76443 14.0153 9.77512 14.0304 9.78619 14.0455C9.92815 14.2385 10.1031 14.3756 10.2832 14.4716C10.1534 14.6425 10.0334 14.8188 9.92296 15H7.64286C4.52639 15 2 12.4736 2 9.35714C2 8.60761 2.60761 8 3.35714 8H7.74983C7.27924 7.37347 7 6.59442 7 5.75C7 3.67893 8.67893 2 10.75 2C12.5642 2 14.0775 3.28832 14.425 5H15.8333C16.4777 5 17 5.52233 17 6.16667C17 7.17919 16.1792 8 15.1667 8H13.7502C13.6155 8.17934 13.4651 8.34619 13.301 8.49851C13.6728 8.72201 13.9996 9.01259 14.2647 9.35354C13.8345 9.39478 13.4353 9.46052 13.0685 9.55305C12.8063 9.34145 12.5004 9.18176 12.1664 9.08967C11.9698 9.03546 11.8258 8.86729 11.8026 8.66469C11.7793 8.46209 11.8814 8.26567 12.0606 8.16831C12.5489 7.90304 12.9473 7.49477 13.2002 7H15.1667C15.6269 7 16 6.6269 16 6.16667C16 6.07462 15.9254 6 15.8333 6H13.4888C13.4962 5.91765 13.5 5.83427 13.5 5.75C13.5 4.23122 12.2688 3 10.75 3Z"
      fill={color}
    />
    <path
      d="M12.8161 10.6774C13.9939 10.2308 15.8348 10.186 18.3742 10.5153C18.8166 10.5727 19.0325 11.0793 18.7672 11.4375C18.4086 11.9217 18.0946 12.5601 17.8296 13.353L17.7189 13.7021L17.4803 14.4879C16.9516 16.1312 16.3278 16.946 14.901 17.3549C13.6274 17.7199 12.5432 17.222 11.7043 16.1602C11.3646 16.7768 11.1339 17.5731 11.1065 18.3848C11.0956 18.7071 10.8368 18.9951 10.5358 18.98C10.2349 18.965 9.95647 18.7034 9.96734 18.3811C10.0194 16.8376 10.551 15.5423 11.5584 14.5258C12.5177 13.5579 13.5385 12.8745 14.6205 12.4827C14.9265 12.3719 15.2584 12.4801 15.3679 12.7829C15.4774 13.0856 15.3263 13.4261 15.0203 13.5369C14.1292 13.8596 13.1604 14.5541 12.3335 15.3798C12.9246 16.2849 13.7159 16.6726 14.5861 16.4232C15.5414 16.1494 15.9456 15.6309 16.3612 14.3373L16.6216 13.4797L16.7238 13.1618C16.8635 12.7463 17.0173 12.3639 17.1855 12.0147L17.5381 11.458L16.9413 11.3856C15.2119 11.2368 13.9485 11.3175 13.1707 11.6125C12.2816 11.9496 11.7856 12.4593 11.6175 13.1693C11.5431 13.4837 11.2627 13.7306 10.9463 13.659C10.6299 13.5874 10.4562 13.3796 10.5306 13.0652C10.7942 11.9523 11.5777 11.147 12.8161 10.6774Z"
      fill={color}
    />
  </svg>
);
