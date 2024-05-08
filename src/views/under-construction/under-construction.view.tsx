import React from "react";

export const UnderConstruction: React.FC = (props) => {
  return (
    <div className="w-full relative">
      <div className="w-full overflow-hidden mb-10 md:mb-16">
        <div
          className="h-[450px] md:h-[550px] w-full bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('/assets/under_construction.jpg')` }}
        ></div>
      </div>
      <div className="w-11/12 md:w-5/12 flex flex-wrap flex-col items-center gap-6 absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4 text-white text-center">
        <h2 className="text-[42px] text-center">Under Construction</h2>
        <p className="flex flex-col flex-wrap gap-2 text-base md:text-[26px]">
          <span>
            Sorry for the inconvenience! We&apos;re currently updating and
            improving our website to provide you with a better experience.
            Please check back later.
          </span>
          <span>Thank you!</span>
        </p>
      </div>
    </div>
  );
};
