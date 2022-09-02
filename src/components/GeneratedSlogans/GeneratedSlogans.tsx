import React, { useRef, useState } from "react";
import { Slogan } from "../../dummy-data";
import Button from "../Button/Button";
import ArrowIcon from "../icons/ArrowIcon";
import Number from "../Number/Number";
import "./generated-slogans.css";
export type IProps = {
  generatedSlogans: Slogan[];
  input: string;
  sloganPerPage: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const GeneratedSlogans = ({
  generatedSlogans,
  input,
  sloganPerPage,
  page,
  setPage,
}: IProps) => {
  const [showClickToCopy, setShowClickToCopy] = useState(true);
  const [clickToCopyPostion, setClickToCopyPosition] = useState<{
    top: number;
    left?: number;
    right?: number;
    transform: string;
  } | null>(null);
  const [clickToCopyText, setClickToCopyText] = useState("Click to copy");

  const clickToCopyRef = useRef<HTMLDivElement>(null);

  const generatePagination = () => {
    const changePageNo = (pageNo: number) => {
      setPage(pageNo);
    };
    let pagination: any = [];
    if (generatedSlogans.length / sloganPerPage > 4) {
      pagination = [
        <Number onClick={changePageNo} value={1} active={page === 1} key={1} />,
        <Number onClick={changePageNo} value={2} active={page === 2} key={2} />,
        <Number onClick={changePageNo} value={3} active={page === 3} key={3} />,
        <p key="Continue">...</p>,
        <Number
          onClick={changePageNo}
          value={Math.ceil(generatedSlogans.length / sloganPerPage)}
          active={page === Math.ceil(generatedSlogans.length / sloganPerPage)}
          key={Math.ceil(generatedSlogans.length / sloganPerPage)}
        />,
      ];
    } else {
      let value = 1;
      for (
        let index = 1;
        index <= generatedSlogans.length;
        index += sloganPerPage
      ) {
        pagination.push(<Number onClick={changePageNo} value={value} />);
        value++;
      }
    }
    return pagination;
  };

  const handleShowClickToCopy = (e: React.MouseEvent) => {
    setClickToCopyText("Click to copy");
    console.log((clickToCopyRef.current as HTMLDivElement).offsetWidth);
    setShowClickToCopy(true);

    if ((e.target as HTMLDivElement).offsetLeft < window.innerWidth / 2) {
      setClickToCopyPosition({
        top:
          (e.target as HTMLDivElement).offsetTop +
          (e.target as HTMLDivElement).offsetHeight / 2,
        right: window.innerWidth - (e.target as HTMLDivElement).offsetLeft,
        transform: "translateY(-50%)",
      });
    } else {
      setClickToCopyPosition({
        top:
          (e.target as HTMLDivElement).offsetTop +
          (e.target as HTMLDivElement).offsetHeight / 2,
        left:
          (e.target as HTMLDivElement).offsetLeft +
          (e.target as HTMLDivElement).offsetWidth +
          16,
        transform: "translateY(-50%)",
      });
    }
  };

  const handleSloganClick = async (slogan: string) => {
    await navigator.clipboard.writeText(slogan);
    setClickToCopyText("Copied!");
    setTimeout(() => {
      setShowClickToCopy(false);
      setClickToCopyPosition(null);
    }, 500);
  };
  return (
    <div className="all__slogans">
      <div className="all__slogans--header">
        <h2>
          We have generated {generatedSlogans.length} slogans for "{input}"
        </h2>
        <Button
          type="outline"
          size="sm"
          text="Download all"
          backgroundColor="transparent"
        />
      </div>
      <div className="slogan__container">
        {generatedSlogans
          .slice(
            (page - 1) * sloganPerPage,
            (page - 1) * sloganPerPage + sloganPerPage
          )
          .map((slogan, index) => (
            <div
              className="slogan__item"
              key={index}
              onMouseOver={handleShowClickToCopy}
              onClick={handleSloganClick.bind(this, slogan.slogan)}
              onMouseLeave={() => {
                setShowClickToCopy(false);
              }}
            >
              {slogan.slogan}
            </div>
          ))}
      </div>
      <div
        ref={clickToCopyRef}
        className="click-to-copy"
        style={{
          visibility: showClickToCopy ? "visible" : "hidden",
          position: "absolute",
          ...clickToCopyPostion,
        }}
      >
        {clickToCopyText}
      </div>
      <div className="pagination__container">
        <div></div>
        <div className="pagination__item">{generatePagination()}</div>
        <div
          className="next__button"
          onClick={() => {
            if (page === Math.ceil(generatedSlogans.length / sloganPerPage)) {
              console.log("reached end");
              return;
            }
            setPage(page + 1);
          }}
        >
          <p>Next</p>
          <ArrowIcon height={12} width={12} />
        </div>
      </div>
    </div>
  );
};

export default GeneratedSlogans;
