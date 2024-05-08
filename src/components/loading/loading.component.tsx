import React from "react";
import { ILoadingProps } from "./loading.type";
import { HashLoader } from "react-spinners";

const prefixClassName = "loading";

export const Loading: React.FC<ILoadingProps> = (props) => {
  const {
    heightOfWrapper = "100%",
    widthOfWrapper = "100%",
    isOverlay = true,
    sizeOfLines = 80,
  } = props;

  return (
    <div
      className={isOverlay ? `${prefixClassName}__overlay` : prefixClassName}
      style={{ height: heightOfWrapper, width: widthOfWrapper }}
    >
      <HashLoader color="#2B772B" size={sizeOfLines} />
    </div>
  );
};
