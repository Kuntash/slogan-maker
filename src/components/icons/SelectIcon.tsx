import React from "react";

export type IProps = {
  height: number;
  width: number;
};
const SelectIcon = ({ height, width }: IProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_598)">
        <rect
          x="8"
          y="12"
          width="56"
          height="48"
          rx="5"
          fill="#146EB4"
          fillOpacity="0.15"
          stroke="#146EB4"
          strokeWidth="3.5"
          strokeMiterlimit="10"
        />
        <path
          d="M26 27L34.3324 47L37.2905 38.2905L46 35.3324L26 27Z"
          stroke="#146EB4"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_598">
          <rect width="72" height="72" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SelectIcon;
