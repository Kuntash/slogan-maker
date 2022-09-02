import React from "react";

export type IProps = {
  height: number;
  width: number;
};
const ArrowIcon = ({ height, width }: IProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.58311 10.2919C3.33086 10.0396 3.30792 9.6449 3.51431 9.36675L3.58311 9.28706L6.86984 6L3.58311 2.71294C3.33086 2.46069 3.30792 2.06596 3.51431 1.7878L3.58311 1.70811C3.83536 1.45586 4.23009 1.43292 4.50825 1.63931L4.58794 1.70811L8.37742 5.49758C8.62967 5.74983 8.6526 6.14457 8.44621 6.42273L8.37742 6.50242L4.58794 10.2919C4.31047 10.5694 3.86059 10.5694 3.58311 10.2919Z"
        fill="#146EB4"
      />
    </svg>
  );
};

export default ArrowIcon;
