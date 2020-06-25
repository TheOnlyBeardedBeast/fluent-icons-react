import * as React from 'react';
import IconProps from '../IconProps';

export const WeatherSnowShowerDayRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_weather_snow_shower_day_20_regular" fill={color} fill-rule="nonzero">
        <path
          d="M9.5,17 C9.77614237,17 10,17.2238576 10,17.5 C10,17.7761424 9.77614237,18 9.5,18 C9.22385763,18 9,17.7761424 9,17.5 C9,17.2238576 9.22385763,17 9.5,17 Z M12.5,17 C12.7761424,17 13,17.2238576 13,17.5 C13,17.7761424 12.7761424,18 12.5,18 C12.2238576,18 12,17.7761424 12,17.5 C12,17.2238576 12.2238576,17 12.5,17 Z M8,16 C8.27614237,16 8.5,16.2238576 8.5,16.5 C8.5,16.7761424 8.27614237,17 8,17 C7.72385763,17 7.5,16.7761424 7.5,16.5 C7.5,16.2238576 7.72385763,16 8,16 Z M11,16 C11.2761424,16 11.5,16.2238576 11.5,16.5 C11.5,16.7761424 11.2761424,17 11,17 C10.7238576,17 10.5,16.7761424 10.5,16.5 C10.5,16.2238576 10.7238576,16 11,16 Z M14,16 C14.2761424,16 14.5,16.2238576 14.5,16.5 C14.5,16.7761424 14.2761424,17 14,17 C13.7238576,17 13.5,16.7761424 13.5,16.5 C13.5,16.2238576 13.7238576,16 14,16 Z M11,6 C13.4645648,6 14.8626705,7.57359992 15.0660053,9.47399034 L15.1282051,9.4739884 C16.7142536,9.4739884 18,10.7110282 18,12.2369942 C18,13.7629602 16.7142536,15 15.1282051,15 L6.87179487,15 C5.28574636,15 4,13.7629602 4,12.2369942 C4,10.7110282 5.28574636,9.4739884 6.87181238,9.4739884 L6.93399466,9.47399034 C7.13851239,7.56110917 8.53543521,6 11,6 Z M11,7 C9.35056297,7 7.91289643,8.27029833 7.91289643,10.0249473 C7.91289643,10.3029682 7.65891017,10.5211286 7.36808412,10.5211195 L6.81818182,10.5211024 C5.81402773,10.5211024 5,11.2998802 5,12.2605512 C5,13.2212223 5.81402773,14 6.81818182,14 L15.1818182,14 C16.1859723,14 17,13.2212223 17,12.2605512 C17,11.2998802 16.1859723,10.5211024 15.1818359,10.5211024 L14.6319159,10.5211195 C14.3410898,10.5211286 14.0871036,10.3029682 14.0871036,10.0249473 C14.0871036,8.24778983 12.649437,7 11,7 Z M3.8032255,8.70081424 C3.88313942,8.93290112 3.78236492,9.18351222 3.5756067,9.29948017 L3.49325029,9.3363576 L2.69184473,9.61230367 C2.43074698,9.70220683 2.14620452,9.5634262 2.05630136,9.30232845 C1.97638744,9.07024157 2.07716194,8.81963047 2.28392016,8.70366252 L2.36627657,8.66678509 L3.16768213,8.39083903 C3.42877988,8.30093586 3.71332233,8.43971649 3.8032255,8.70081424 Z M8.91927921,4.50023215 C9.2517995,4.66241314 9.54461201,4.87337364 9.79330265,5.12029419 C9.38697694,5.20342733 9.00723777,5.33003856 8.6569133,5.49510246 C8.60127728,5.46104961 8.5420586,5.42885131 8.48090807,5.3990262 C7.3490805,4.84699701 5.98404489,5.31701646 5.4320157,6.44884403 C5.04720196,7.23782912 5.15903613,8.14013785 5.6454906,8.8013763 C5.31552207,8.89962813 5.00517661,9.04248208 4.72105678,9.22210522 C4.12399767,8.29064485 4.01235981,7.07839791 4.53322165,6.01047289 C5.32735654,4.38225507 7.2910614,3.70609726 8.91927921,4.50023215 Z M2.91581663,4.66976877 L3.00012768,4.70192727 L3.76193032,5.07348324 C4.01012544,5.19453609 4.11319462,5.49387072 3.99214177,5.74206584 C3.88453924,5.96268373 3.63607209,6.0686342 3.40787023,6.00443579 L3.32355918,5.97227729 L2.56175654,5.60072132 C2.31356141,5.47966847 2.21049224,5.18033384 2.33154509,4.93213872 C2.43914762,4.71152083 2.68761476,4.60557036 2.91581663,4.66976877 Z M9.98917247,2.29540616 C10.2097904,2.40300869 10.3157408,2.65147584 10.2515424,2.8796777 L10.2193839,2.96398876 L9.84782794,3.7257914 C9.72677509,3.97398652 9.42744047,4.07705569 9.17924535,3.95600285 C8.95862746,3.84840031 8.85267699,3.59993317 8.9168754,3.37173131 L8.9490339,3.28742025 L9.32058987,2.52561761 C9.44164272,2.27742249 9.74097734,2.17435331 9.98917247,2.29540616 Z M6.19930414,2.2629798 L6.23618157,2.34533621 L6.51212764,3.14674178 C6.6020308,3.40783952 6.46325017,3.69238198 6.20215243,3.78228514 C5.97006554,3.86219906 5.71945444,3.76142456 5.60348649,3.55466634 L5.56660906,3.47230993 L5.290663,2.67090437 C5.20075983,2.40980662 5.33954046,2.12526417 5.60063821,2.035361 C5.83272509,1.95544708 6.08333619,2.05622159 6.19930414,2.2629798 Z"
          id="🎨Color"
        ></path>
      </g>
    </g>
  </svg>
);