import * as React from 'react';
import IconProps from '../IconProps';

export const GlobeAddRegular: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_globe_add_24_regular" fill={color} fill-rule="nonzero">
        <path
          d="M17.5,12 C20.5375661,12 23,14.4624339 23,17.5 C23,20.5375661 20.5375661,23 17.5,23 C14.4624339,23 12,20.5375661 12,17.5 C12,14.4624339 14.4624339,12 17.5,12 Z M12.0015505,2 C17.5252543,2 22.003101,6.47784668 22.003101,12.0015505 C22.003101,12.2647778 21.9929322,12.5256301 21.972966,12.783736 C21.5342657,12.3676239 21.0379615,12.0122455 20.4970901,11.7306949 L20.501,11.908 L20.4933278,11.5902808 C20.4673643,11.0451848 20.390065,10.513537 20.2661579,10.0000656 L20.2515503,10.0010326 L16.9081265,10.0009206 C16.9404365,10.3355473 16.964719,10.675994 16.9806408,11.0212976 C16.4643081,11.0612668 15.9649705,11.162417 15.4896584,11.3168498 C15.4750845,10.8659971 15.4437358,10.4269629 15.3984779,10.0009652 L8.6046231,10.0009652 C8.53660149,10.6412297 8.5,11.3109425 8.5,12.0015505 C8.5,13.061055 8.58614719,14.0713796 8.7397323,15.0016396 L11.4975681,15.0014279 C11.2999982,15.4755137 11.1569574,15.9780138 11.0762792,16.5010948 L9.06264622,16.5012898 C9.66105022,18.7168269 10.6648366,20.2363024 11.7175529,20.4712945 C12.0009168,21.022104 12.3609867,21.5272689 12.783471,21.9726435 C12.5256301,21.9929322 12.2647778,22.003101 12.0015505,22.003101 C6.47784668,22.003101 2,17.5252543 2,12.0015505 C2,6.47784668 6.47784668,2 12.0015505,2 Z M17.5,13.9992349 L17.4101244,14.0072906 C17.2060313,14.0443345 17.0450996,14.2052662 17.0080557,14.4093593 L17,14.4992349 L16.9996498,16.9992349 L14.4976498,17 L14.4077742,17.0080557 C14.2036811,17.0450996 14.0427494,17.2060313 14.0057055,17.4101244 L13.9976498,17.5 L14.0057055,17.5898756 C14.0427494,17.7939687 14.2036811,17.9549004 14.4077742,17.9919443 L14.4976498,18 L17.0006498,17.9992349 L17.0011076,20.5034847 L17.0091633,20.5933603 C17.0462073,20.7974534 17.207139,20.9583851 17.411232,20.995429 L17.5011076,21.0034847 L17.5909833,20.995429 C17.7950763,20.9583851 17.956008,20.7974534 17.993052,20.5933603 L18.0011076,20.5034847 L18.0006498,17.9992349 L20.5045655,18 L20.5944411,17.9919443 C20.7985342,17.9549004 20.9594659,17.7939687 20.9965098,17.5898756 L21.0045655,17.5 L20.9965098,17.4101244 C20.9594659,17.2060313 20.7985342,17.0450996 20.5944411,17.0080557 L20.5045655,17 L17.9996498,16.9992349 L18,14.4992349 L17.9919443,14.4093593 C17.9549004,14.2052662 17.7939687,14.0443345 17.5898756,14.0072906 L17.5,13.9992349 Z M7.50986005,16.5018432 L4.78737673,16.5017129 C5.74571729,18.034778 7.17916064,19.2403744 8.88154384,19.9123391 C8.30123475,19.0014247 7.83362773,17.8356145 7.50986005,16.5018432 Z M3.73736825,10.0009012 L3.73261072,10.018106 C3.58052943,10.6544605 3.5,11.3186012 3.5,12.0015505 C3.5,13.0577045 3.69258928,14.0688768 4.04456502,15.0018646 L7.21772581,15.0014993 C7.07542618,14.0523963 7,13.0441795 7,12.0015505 C7,11.3175381 7.03246314,10.6483365 7.09497447,10.0009012 L3.75155029,10.0010326 C3.74681255,10.0010326 3.74208508,10.0009887 3.73736825,10.0009012 Z M8.88260058,4.09070452 L8.85969519,4.09942119 C6.81238094,4.91413095 5.15636682,6.50144062 4.25169924,8.50130378 L7.29981975,8.50167019 C7.61317418,6.74887795 8.16001974,5.22295334 8.88260058,4.09070452 Z M12.0015505,3.5 L11.8858984,3.50529928 C10.620457,3.6210571 9.39797856,5.62302224 8.83026335,8.50125123 L15.1728377,8.50125123 C14.5878427,5.53541666 13.3076194,3.5 12.0015505,3.5 Z M15.1215572,4.09076193 L15.2283941,4.26485591 C15.8976031,5.37732247 16.4057178,6.83720708 16.7032812,8.50167019 L19.7514018,8.50130378 C18.8435182,6.49433136 17.1789367,4.90285079 15.1215572,4.09076193 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
