import * as React from 'react';
import IconProps from '../IconProps';

export const MarkUnreadRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.28034 2.21968C2.98745 1.92678 2.51257 1.92677 2.21968 2.21966C1.92678 2.51255 1.92677 2.98743 2.21966 3.28032L5.49306 6.55379L2.6277 9.67259L2.58382 9.72499L2.54602 9.78018C2.20576 10.1744 2 10.688 2 11.2496V14.7461C2 16.541 3.45507 17.9961 5.25 17.9961H7.74883C9.54376 17.9961 10.9988 16.541 10.9988 14.7461L10.998 12.504H11.4432L12.9997 14.0606L13 14.7461C13 16.541 14.4551 17.9961 16.25 17.9961H16.9351L20.7194 21.7805C21.0123 22.0734 21.4872 22.0734 21.7801 21.7805C22.073 21.4876 22.073 21.0127 21.7801 20.7198L3.28034 2.21968ZM7.93866 8.99944L5.283 8.99901L6.55456 7.61531L7.93866 8.99944ZM4.25 10.4996H8.74883C9.16305 10.4996 9.49883 10.8354 9.49883 11.2496V14.7461C9.49883 15.7126 8.71533 16.4961 7.74883 16.4961H5.25C4.2835 16.4961 3.5 15.7126 3.5 14.7461V11.2496C3.5 10.8354 3.83579 10.4996 4.25 10.4996Z"
      fill={color}
    />
    <path
      d="M13.303 10.1212L14.5 11.3182V11.2496C14.5 10.8354 14.8358 10.4996 15.25 10.4996H19.7488C20.163 10.4996 20.4988 10.8354 20.4988 11.2496V14.7461C20.4988 15.4414 20.0934 16.042 19.506 16.3243L20.5996 17.418C21.4452 16.8312 21.9988 15.8533 21.9988 14.7461V11.2496C21.9988 10.7201 21.816 10.2334 21.5101 9.84907C21.479 9.7858 21.4384 9.72589 21.3881 9.67142L17.7462 5.72425L17.6133 5.59179C17.2 5.2127 16.6579 5.00001 16.0925 5.00001H14.7467L14.645 5.00686C14.2789 5.05652 13.9967 5.37031 13.9967 5.75001C13.9967 6.16422 14.3325 6.50001 14.7467 6.50001H16.0925L16.1962 6.50721C16.3669 6.53103 16.5254 6.61318 16.6438 6.74142L18.727 8.99901L15.25 8.99957C14.4186 8.99957 13.6925 9.45052 13.303 10.1212Z"
      fill={color}
    />
  </svg>
);
