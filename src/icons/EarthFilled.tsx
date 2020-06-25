import * as React from 'react';
import IconProps from '../IconProps';

export const EarthFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.999512 7.99803C0.999512 4.13289 4.13283 0.999573 7.99797 0.999573C11.8631 0.999573 14.9964 4.13289 14.9964 7.99803C14.9964 11.8632 11.8631 14.9965 7.99797 14.9965C4.13283 14.9965 0.999512 11.8632 0.999512 7.99803ZM7.99797 1.99957L7.94859 1.99977C8.03989 2.17864 8.13987 2.39461 8.22996 2.63397C8.47304 3.27978 8.69358 4.22554 8.30098 5.06155C7.93927 5.83178 7.31604 6.03126 6.85055 6.15153L6.78328 6.16887C6.33064 6.28545 6.14303 6.33377 6.00793 6.53887C5.88155 6.73074 5.90435 6.97155 6.04781 7.43904C6.05802 7.47231 6.06903 7.50739 6.08048 7.54389C6.13745 7.72542 6.20544 7.94207 6.2409 8.14586C6.28497 8.39918 6.29674 8.7177 6.13674 9.02472C5.97649 9.33223 5.76469 9.54091 5.51495 9.67697C5.27988 9.80503 5.03589 9.85388 4.85085 9.8867L4.78225 9.89879C4.42404 9.96175 4.24235 9.99368 4.06762 10.1809C3.93079 10.3274 3.8456 10.5822 3.79619 10.9528C3.77603 11.104 3.7639 11.2539 3.75143 11.4081L3.74474 11.4902C3.73069 11.6607 3.7134 11.8547 3.67562 12.0207L3.65053 12.131C4.74332 13.2801 6.28699 13.9965 7.99797 13.9965C9.11317 13.9965 10.1573 13.6922 11.0518 13.162C10.9724 13.0839 10.8822 12.9875 10.7936 12.8759C10.5566 12.5775 10.2499 12.0683 10.3563 11.4696C10.4073 11.1825 10.5614 10.941 10.7122 10.754C10.8658 10.5637 11.0515 10.3874 11.2149 10.237C11.2535 10.2015 11.2906 10.1676 11.3262 10.1351C11.4515 10.0207 11.5588 9.92274 11.6504 9.82667C11.707 9.76746 11.7473 9.71931 11.7746 9.68048C11.7977 9.6476 11.8049 9.63064 11.806 9.62804C11.8567 9.46021 11.7951 9.33714 11.7221 9.28072C11.6673 9.23833 11.5269 9.17535 11.2764 9.33403C11.179 9.3957 11.0923 9.45053 11.0225 9.49107C10.9702 9.52149 10.8641 9.5831 10.7482 9.60845C10.685 9.62225 10.5463 9.64241 10.3951 9.57134C10.2242 9.49104 10.1458 9.34773 10.1142 9.24925C10.0865 9.16273 10.0854 9.0856 10.0857 9.04947C10.086 9.00716 10.0897 8.96681 10.0928 8.93747C10.0954 8.91316 10.0985 8.88727 10.1019 8.85968C10.1275 8.64911 10.1652 8.33933 10.0449 7.87749C9.94813 7.50612 9.80724 7.22363 9.66337 6.93517C9.59706 6.80222 9.53011 6.66799 9.46657 6.52321C9.37901 6.32372 9.28273 6.06391 9.29966 5.78733C9.31923 5.46771 9.48127 5.20704 9.74249 5.01112C10.0595 4.77331 10.4583 4.22902 10.8033 3.67782C10.9683 3.41418 11.1096 3.16788 11.2097 2.98732C11.2176 2.97299 11.2253 2.95909 11.2327 2.94563C10.2994 2.34683 9.18923 1.99957 7.99797 1.99957Z"
      fill={color}
    />
  </svg>
);