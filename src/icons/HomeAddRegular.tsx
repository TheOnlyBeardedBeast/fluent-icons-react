import * as React from 'react';
import IconProps from '../IconProps';

export const HomeAddRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.1771 2.77116L12.0798 2.91103C11.6394 3.57482 11.3177 4.32419 11.1449 5.12886L5.35754 9.68827C4.81603 10.1149 4.5 10.7662 4.5 11.4556V20.5H9V15.75C9 14.7835 9.7835 14 10.75 14H13.25C14.2165 14 15 14.7835 15 15.75V20.5H19.5L19.5004 12.6864C20.0342 12.5139 20.5378 12.2743 21.0012 11.9774L21 20.75C21 21.4404 20.4404 22 19.75 22H14.75C14.0596 22 13.5 21.4404 13.5 20.75V15.75C13.5 15.6119 13.3881 15.5 13.25 15.5H10.75C10.6119 15.5 10.5 15.6119 10.5 15.75V20.75C10.5 21.4404 9.94036 22 9.25 22H4.25C3.55964 22 3 21.4404 3 20.75V11.4556C3 10.3067 3.52672 9.2211 4.42923 8.51003L11.5358 2.91088C11.7213 2.76473 11.9586 2.71815 12.1771 2.77116ZM17.5 1C20.5376 1 23 3.46243 23 6.5C23 9.53757 20.5376 12 17.5 12C14.4624 12 12 9.53757 12 6.5C12 3.46243 14.4624 1 17.5 1ZM17.5 2.99923L17.4101 3.00729C17.206 3.04433 17.0451 3.20527 17.0081 3.40936L17 3.49923L16.9996 5.99923L14.4977 6L14.4078 6.00806C14.2037 6.0451 14.0427 6.20603 14.0057 6.41012L13.9977 6.5L14.0057 6.58988C14.0427 6.79397 14.2037 6.9549 14.4078 6.99194L14.4977 7L17.0007 6.99923L17.0011 9.50348L17.0092 9.59336C17.0462 9.79745 17.2071 9.95839 17.4112 9.99543L17.5011 10.0035L17.591 9.99543C17.7951 9.95839 17.956 9.79745 17.9931 9.59336L18.0011 9.50348L18.0007 6.99923L20.5046 7L20.5944 6.99194C20.7985 6.9549 20.9595 6.79397 20.9965 6.58988L21.0046 6.5L20.9965 6.41012C20.9595 6.20603 20.7985 6.0451 20.5944 6.00806L20.5046 6L17.9996 5.99923L18 3.49923L17.9919 3.40936C17.9496 3.17611 17.7455 2.99923 17.5 2.99923Z"
      fill={color}
    />
  </svg>
);
