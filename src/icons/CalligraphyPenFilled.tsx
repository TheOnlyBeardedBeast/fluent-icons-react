import * as React from 'react';
import IconProps from '../IconProps';

export const CalligraphyPenFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.75 2C6.16421 2 6.5 2.33579 6.5 2.75V4.75C6.5 4.88807 6.61193 5 6.75 5H13.25C13.3881 5 13.5 4.88807 13.5 4.75V2.75C13.5 2.33579 13.8358 2 14.25 2C14.6642 2 15 2.33579 15 2.75V4.75C15 5.62561 14.3569 6.35102 13.5173 6.47971L14.7493 9.08046C15.1032 9.82771 15.0648 10.7016 14.6467 11.415L11.1842 17.3215C11.0258 17.5918 10.7828 17.7951 10.5 17.9057V10.8662C10.7989 10.6933 11 10.3701 11 10C11 9.44771 10.5523 9 10 9C9.44771 9 9 9.44771 9 10C9 10.3701 9.2011 10.6933 9.5 10.8662V17.9057C9.21718 17.7951 8.97423 17.5918 8.81578 17.3215L5.35333 11.415C4.93517 10.7016 4.89676 9.82771 5.25073 9.08046L6.48266 6.47971C5.64306 6.35101 5 5.6256 5 4.75V2.75C5 2.33579 5.33579 2 5.75 2Z"
      fill={color}
    />
  </svg>
);
