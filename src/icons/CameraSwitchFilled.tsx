import * as React from 'react';
import IconProps from '../IconProps';

export const CameraSwitchFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_camera_switch_24_filled" fill={color} fill-rule="nonzero">
        <path
          d="M21,7 C21.5128358,7 21.9355072,7.38604019 21.9932723,7.88337887 L22,8 L22,16.5 C22,18.3685634 20.5357224,19.8951264 18.6920352,19.9948211 L18.5,20 L6.415,20 L6.70710678,20.2928932 C7.06759074,20.6533772 7.09532028,21.2206082 6.79029539,21.6128994 L6.70710678,21.7071068 C6.34662282,22.0675907 5.77939176,22.0953203 5.38710056,21.7902954 L5.29289322,21.7071068 L3.29289322,19.7071068 L3.27515136,19.6889111 C3.25324864,19.6658731 3.23243278,19.641792 3.21278596,19.6167501 L3.29289322,19.7071068 C3.25749917,19.6717127 3.22531295,19.6343256 3.19633458,19.5953066 C3.17849009,19.5711307 3.1617187,19.546275 3.14606743,19.5206602 C3.13860692,19.5086131 3.13149883,19.4963944 3.12467117,19.4840621 C3.11379392,19.4642939 3.10337664,19.4438914 3.09365378,19.4230991 C3.08567905,19.4060985 3.07819642,19.3887956 3.07122549,19.371336 C3.06331574,19.3515792 3.05612249,19.3317977 3.04954668,19.3117364 C3.04472872,19.2968513 3.04009773,19.2814633 3.03584514,19.265993 C3.02983363,19.2444365 3.0246398,19.2227461 3.02016515,19.2007941 C3.01670217,19.1833753 3.01362808,19.165949 3.0110178,19.1484669 C3.00810098,19.1294204 3.00574796,19.1096949 3.00397748,19.0898018 C3.00189498,19.0659949 3.00063489,19.042681 3,19.0193545 C3,19.0129086 3,19.0064615 3,19 L3.00031832,18.9746912 C3.00085521,18.9533518 3.00207124,18.9320263 3.00396641,18.9107499 L3,19 C3,18.9493797 3.00376119,18.8996379 3.01101934,18.8510388 C3.01362808,18.834051 3.01670217,18.8166247 3.02024007,18.7992742 C3.0246398,18.7772539 3.02983363,18.7555635 3.03572097,18.7341604 C3.04009773,18.7185367 3.04472872,18.7031487 3.04973809,18.6878575 C3.05612249,18.6682023 3.06331574,18.6484208 3.07110396,18.6289415 C3.07819642,18.6112044 3.08567905,18.5939015 3.09367336,18.5767785 C3.10337664,18.5561086 3.11379392,18.5357061 3.12487577,18.515723 C3.13149883,18.5036056 3.13860692,18.4913869 3.14599545,18.4792912 C3.1617187,18.453725 3.17849009,18.4288693 3.19631351,18.4048407 C3.20071786,18.3987914 3.20517454,18.3929267 3.20970461,18.3871006 C3.23766884,18.3515341 3.26442691,18.3213595 3.29289322,18.2928932 L5.29289322,16.2928932 C5.68341751,15.9023689 6.31658249,15.9023689 6.70710678,16.2928932 C7.06759074,16.6533772 7.09532028,17.2206082 6.79029539,17.6128994 L6.70710678,17.7071068 L6.414,18 L18.5,18 C19.2796961,18 19.9204487,17.4051119 19.9931334,16.64446 L20,16.5 L20,8 C20,7.44771525 20.4477153,7 21,7 Z M18.6128994,2.20970461 L18.7071068,2.29289322 L20.7071068,4.29289322 C20.7355731,4.32135953 20.7623312,4.35153408 20.787214,4.38324992 L20.7071068,4.29289322 C20.7380394,4.32382584 20.7665219,4.35628076 20.7925543,4.39001682 C20.8145395,4.41864203 20.8350511,4.4484386 20.8539326,4.47933981 C20.8613931,4.49138689 20.8685012,4.50360556 20.8753288,4.5159379 C20.8853303,4.53412682 20.8949727,4.55288644 20.9040281,4.57197861 C20.9128437,4.59049839 20.9211177,4.60948661 20.9287745,4.62866398 C20.9366843,4.6484208 20.9438775,4.66820232 20.9504533,4.68826359 C20.9552713,4.70314866 20.9599023,4.71853672 20.9641549,4.73400703 C20.9701664,4.75556352 20.9753602,4.77725392 20.9798348,4.7992059 C20.9832978,4.81662474 20.9863719,4.83405099 20.9889822,4.85153313 C20.9920328,4.87147534 20.9944666,4.89211395 20.9962623,4.91293499 C20.9978436,4.93173451 20.9989053,4.94973363 20.9994829,4.96774538 C21,4.97778921 21,4.98887338 21,5 L20.9996817,5.02530883 C20.9991786,5.04530249 20.9980794,5.06528394 20.996384,5.08522423 L21,5 C21,5.05062028 20.9962388,5.10036209 20.9889807,5.14896122 C20.9863719,5.16594901 20.9832978,5.18337526 20.9797599,5.20072576 C20.9753602,5.22274608 20.9701664,5.24443648 20.964279,5.26583961 C20.9599023,5.28146328 20.9552713,5.29685134 20.9502619,5.31214252 C20.9438775,5.33179768 20.9366843,5.3515792 20.928896,5.37105852 C20.9218036,5.38879565 20.914321,5.4060985 20.9063266,5.42322155 C20.8966234,5.4438914 20.8862061,5.46429395 20.8751242,5.48427695 C20.8685012,5.49639444 20.8613931,5.50861311 20.8540045,5.52070875 C20.8412961,5.54134093 20.8279295,5.5615269 20.8138686,5.58118225 C20.8061703,5.59206245 20.7983489,5.60254192 20.7902954,5.61289944 C20.7849289,5.61966276 20.7826279,5.62256244 20.7803112,5.62544899 L20.7071068,5.70710678 L18.7071068,7.70710678 C18.3165825,8.09763107 17.6834175,8.09763107 17.2928932,7.70710678 C16.9324093,7.34662282 16.9046797,6.77939176 17.2097046,6.38710056 L17.2928932,6.29289322 L17.584,6 L5.5,6 C4.72030388,6 4.07955132,6.59488808 4.00686658,7.35553999 L4,7.5 L4,16 C4,16.5522847 3.55228475,17 3,17 C2.48716416,17 2.06449284,16.6139598 2.00672773,16.1166211 L2,16 L2,7.5 C2,5.6314366 3.4642776,4.10487355 5.3079648,4.00517886 L5.5,4 L17.585,4 L17.2928932,3.70710678 C16.9324093,3.34662282 16.9046797,2.77939176 17.2097046,2.38710056 L17.2928932,2.29289322 C17.6533772,1.93240926 18.2206082,1.90467972 18.6128994,2.20970461 Z M12,8 C14.209139,8 16,9.790861 16,12 C16,14.209139 14.209139,16 12,16 C9.790861,16 8,14.209139 8,12 C8,9.790861 9.790861,8 12,8 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);