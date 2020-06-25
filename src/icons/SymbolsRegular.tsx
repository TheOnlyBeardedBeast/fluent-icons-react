import * as React from 'react';
import IconProps from '../IconProps';

export const SymbolsRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_symbols_24_regular" fill={color} fill-rule="nonzero">
        <path
          d="M16.9183999,18 C17.3326135,18 17.6683999,18.3357864 17.6683999,18.75 C17.6683999,19.1296958 17.386246,19.443491 17.0201705,19.4931534 L16.9183999,19.5 L15.8818897,19.5003974 C16.4382205,20.121834 17.2432125,20.5 18.1183999,20.5 C19.113982,20.5 20.0261496,20.0123206 20.5840585,19.209543 C20.8204455,18.8694047 21.2878116,18.7852977 21.6279499,19.0216847 C21.9680882,19.2580717 22.0521952,19.7254378 21.8158082,20.0655761 C20.9804439,21.2675855 19.6105177,22 18.1183999,22 C17.0049491,22 15.9671915,21.5917954 15.1686145,20.8989462 L15.1683999,21.25 C15.1683999,21.6642136 14.8326135,22 14.4183999,22 C14.0387042,22 13.724909,21.7178461 13.6752465,21.3517706 L13.6683999,21.25 L13.6683999,18.75 C13.6683999,18.3703042 13.9505538,18.056509 14.3166294,18.0068466 L14.4183999,18 L16.9183999,18 Z M6.39822944,13.0068466 L6.5,13 C6.87969577,13 7.19349096,13.2821539 7.24315338,13.6482294 L7.25,13.75 L7.25,16.75 L10.25,16.75 C10.6296958,16.75 10.943491,17.0321539 10.9931534,17.3982294 L11,17.5 C11,17.8796958 10.7178461,18.193491 10.3517706,18.2431534 L10.25,18.25 L7.25,18.25 L7.25,21.25 C7.25,21.6296958 6.96784612,21.943491 6.60177056,21.9931534 L6.5,22 C6.12030423,22 5.80650904,21.7178461 5.75684662,21.3517706 L5.75,21.25 L5.75,18.25 L2.75,18.25 C2.37030423,18.25 2.05650904,17.9678461 2.00684662,17.6017706 L2,17.5 C2,17.1203042 2.28215388,16.806509 2.64822944,16.7568466 L2.75,16.75 L5.75,16.75 L5.75,13.75 C5.75,13.3703042 6.03215388,13.056509 6.39822944,13.0068466 L6.5,13 L6.39822944,13.0068466 Z M17.5,13 C18.6134508,13 19.6512084,13.4082046 20.4497854,14.1010538 L20.45,13.75 C20.45,13.3357864 20.7857864,13 21.2,13 C21.5796958,13 21.893491,13.2821539 21.9431534,13.6482294 L21.95,13.75 L21.95,16.25 C21.95,16.6296958 21.6678461,16.943491 21.3017706,16.9931534 L21.2,17 L18.7,17 C18.2857864,17 17.95,16.6642136 17.95,16.25 C17.95,15.8703042 18.2321539,15.556509 18.5982294,15.5068466 L18.7,15.5 L19.7365102,15.4996026 C19.1801794,14.878166 18.3751874,14.5 17.5,14.5 C16.5044179,14.5 15.5922503,14.9876794 15.0343414,15.790457 C14.7979544,16.1305953 14.3305883,16.2147023 13.99045,15.9783153 C13.6503117,15.7419283 13.5662047,15.2745622 13.8025917,14.9344239 C14.637956,13.7324145 16.0078822,13 17.5,13 Z M6.5,2 C8.98528137,2 11,4.01471863 11,6.5 C11,8.98528137 8.98528137,11 6.5,11 C4.01471863,11 2,8.98528137 2,6.5 C2,4.01471863 4.01471863,2 6.5,2 Z M19.2142857,2 C20.7656624,2 22,3.39004579 22,5.07903275 C22,5.94137149 21.6772769,6.75017268 21.1483867,7.29304951 L18.646401,10.4343887 C18.1272413,11.0863945 17.1830388,11.189894 16.5374656,10.6655613 C16.4509185,10.595268 16.3723688,10.5154844 16.303261,10.4276777 L13.6267635,7.02591251 C13.2233084,6.47963466 13,5.79698757 13,5.07903275 C13,3.39004579 14.2343376,2 15.7857143,2 C16.3503761,2 16.88613,2.18641328 17.3359123,2.51958727 L17.5004392,2.65132948 L17.6646725,2.51960858 C18.1137661,2.18647722 18.6495592,2 19.2142857,2 Z M3.91470965,4.97713295 C3.65119661,5.42352132 3.5,5.94410373 3.5,6.5 C3.5,8.15685425 4.84314575,9.5 6.5,9.5 C7.05589627,9.5 7.57647868,9.34880339 8.02286705,9.08529035 L3.91470965,4.97713295 Z M19.2142857,3.51494632 C18.8646418,3.51494632 18.5314228,3.68828677 18.2868704,4.00218921 L17.5028207,5.00857937 L16.7165011,4.00399736 C16.4696014,3.68856459 16.1355672,3.51494632 15.7857143,3.51494632 C15.1013722,3.51494632 14.5,4.19217992 14.5,5.07903275 C14.5,5.47127063 14.6193373,5.83608113 14.8152273,6.10175834 L17.4774873,9.48500032 L20.0438124,6.27042092 C20.3292092,5.97565285 20.5,5.54762093 20.5,5.07903275 C20.5,4.19217992 19.8986278,3.51494632 19.2142857,3.51494632 Z M6.5,3.5 C5.94410373,3.5 5.42352132,3.65119661 4.97713295,3.91470965 L9.08529035,8.02286705 C9.34880339,7.57647868 9.5,7.05589627 9.5,6.5 C9.5,4.84314575 8.15685425,3.5 6.5,3.5 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
