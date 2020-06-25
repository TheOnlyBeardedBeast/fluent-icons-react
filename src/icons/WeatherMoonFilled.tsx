import * as React from 'react';
import IconProps from '../IconProps';

export const WeatherMoonFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_weather_moon_20_filled" fill={color} fill-rule="nonzero">
        <path
          d="M3.83901393,13.9969772 C6.04296632,17.8143347 10.9242024,19.122258 14.7415599,16.9183056 C15.7811279,16.3181108 16.6562742,15.506157 17.3228253,14.5382376 C17.5456788,14.2146252 17.4015245,13.7677022 17.0315827,13.635295 C14.0251814,12.5592628 12.414976,11.3123129 11.4806061,9.52872284 C10.4969444,7.65104131 10.2427417,5.59423178 10.9308698,2.77490336 C11.026023,2.38505163 10.7180951,2.01385251 10.3173754,2.03535163 C9.07492165,2.10201086 7.8610971,2.45891015 6.76034233,3.09443121 C2.94298482,5.2983836 1.63506155,10.1796197 3.83901393,13.9969772 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
