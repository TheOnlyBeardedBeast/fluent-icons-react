import * as React from 'react';
import IconProps from '../IconProps';

export const SymbolsFilled: React.FC<IconProps> = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="ic_fluent_symbols_24_filled" fill={color} fill-rule="nonzero">
        <path
          d="M6.5,12.75 C7.00035787,12.75 7.42380886,13.1201912 7.49450931,13.6516298 L7.50056382,13.766868 L7.5000872,16.5 L10.25,16.5 C10.7503579,16.5 11.1738089,16.8701912 11.2445093,17.4016299 L11.2505624,17.5179853 C11.2493864,18.0061489 10.8743741,18.4245462 10.3483701,18.4945093 L10.233132,18.5005638 L7.5,18.5000872 L7.5,21.25 C7.5,21.7503579 7.12980876,22.1738089 6.59837004,22.2445093 L6.48201473,22.2505624 C5.99385114,22.2493864 5.57545386,21.874374 5.50549069,21.3483702 L5.49943618,21.233132 L5.4999128,18.5 L2.75,18.5 C2.24964213,18.5 1.82619114,18.1298088 1.75549069,17.5983702 L1.74943762,17.4820147 C1.75061361,16.9938511 2.12562597,16.5754538 2.65162996,16.5054907 L2.76686798,16.4994362 L5.5,16.4999128 L5.5,13.75 C5.5,13.2992522 5.80156978,12.9047786 6.27013392,12.7772957 L6.35148599,12.7612438 L6.43102342,12.7520836 L6.5,12.75 Z M16.9183999,17.75 C17.4706847,17.75 17.9183999,18.1977152 17.9183999,18.75 C17.9183999,19.2503579 17.5482087,19.6738089 17.01677,19.7445093 L16.9016343,19.7505638 L16.5371442,19.7505749 C16.9955636,20.0726738 17.5458914,20.25 18.1183999,20.25 C19.0229174,20.25 19.8622908,19.8100305 20.3787669,19.0668708 C20.6939495,18.6133531 21.3171043,18.5012104 21.7706221,18.8163931 C22.2241398,19.1315757 22.3362825,19.7547305 22.0210998,20.2082483 C21.131105,21.4888658 19.6786669,22.25 18.1183999,22.25 C17.1418569,22.25 16.1987287,21.9513151 15.4070892,21.4007815 L15.3843434,21.5096178 C15.2699973,21.936055 14.8808908,22.25 14.4183999,22.25 C13.9180421,22.25 13.4945911,21.8798088 13.4238906,21.34837 L13.4178361,21.2331057 L13.4183999,18.75 C13.4183999,18.2496421 13.7885912,17.8261911 14.3200299,17.7554907 L14.4049736,17.7503495 L16.9183999,17.75 Z M21.2,12.75 C21.7003579,12.75 22.1238089,13.1201912 22.1945093,13.6516299 L22.2005638,13.7668943 L22.2,16.25 C22.2,16.7503579 21.8298088,17.1738089 21.2983701,17.2445093 L21.1831057,17.2505638 L18.7,17.25 C18.1477152,17.25 17.7,16.8022848 17.7,16.25 C17.7,15.7496421 18.0701912,15.3261911 18.6016299,15.2554907 L18.7167656,15.2494362 L19.0812557,15.2494251 C18.6228363,14.9273262 18.0725085,14.75 17.5,14.75 C16.5954825,14.75 15.7561091,15.1899695 15.239633,15.9331292 C14.9244504,16.3866469 14.3012956,16.4987896 13.8477778,16.1836069 C13.3942601,15.8684243 13.2821174,15.2452695 13.5973001,14.7917517 C14.4872949,13.5111342 15.939733,12.75 17.5,12.75 C18.476543,12.75 19.4196712,13.0486849 20.2113107,13.5992185 L20.2340565,13.4903822 C20.3484026,13.063945 20.7375091,12.75 21.2,12.75 Z M6.5,1.75 C9.12335256,1.75 11.25,3.87664744 11.25,6.5 C11.25,9.12335256 9.12335256,11.25 6.5,11.25 C3.87664744,11.25 1.75,9.12335256 1.75,6.5 C1.75,3.87664744 3.87664744,1.75 6.5,1.75 Z M3.91470965,4.97713295 C3.65119661,5.42352132 3.5,5.94410373 3.5,6.5 C3.5,8.15685425 4.84314575,9.5 6.5,9.5 C7.05589627,9.5 7.57647868,9.34880339 8.02286705,9.08529035 L3.91470965,4.97713295 Z M6.5,3.5 C5.94410373,3.5 5.42352132,3.65119661 4.97713295,3.91470965 L9.08529035,8.02286705 C9.34880339,7.57647868 9.5,7.05589627 9.5,6.5 C9.5,4.84314575 8.15685425,3.5 6.5,3.5 Z M19.2142857,1.75 C20.9036665,1.75 22.25,3.25041274 22.25,5.07903275 C22.25,5.98957245 21.9130007,6.8664739 21.3603292,7.43022013 L18.8419965,10.5900884 C18.2363732,11.3506827 17.1335254,11.4717492 16.3798529,10.8596186 C16.2789229,10.7776436 16.1873501,10.6846289 16.1067611,10.5822344 L13.4209851,7.16829569 C12.9861488,6.57929709 12.75,5.84301883 12.75,5.07903275 C12.75,3.25041274 14.0963335,1.75 15.7857143,1.75 C16.3953312,1.75 16.984617,1.94824977 17.5007241,2.33106071 L17.5233453,2.3129491 C18.0164836,1.94741585 18.6061137,1.75 19.2142857,1.75 Z"
          id="🎨-Color"
        ></path>
      </g>
    </g>
  </svg>
);
