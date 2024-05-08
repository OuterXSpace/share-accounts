import React from "react";

export interface ITestimonialItemProps {
  name?: string;
  role?: string;
  text?: string;
}

export const TestimonialItem: React.FC<ITestimonialItemProps> = ({
  name,
  role,
  text,
}) => {
  return (
    <div className="w-full pb-10 md:pb-0">
      <div className="mt-4 md:mt-0 w-full md:w-10/12 flex flex-col gap-0 justify-center items-center relative">
        <h4 className="text-[26px] text-center font-semibold leading-0">
          {name}
        </h4>
        <h6 className="text-base text-[#979898] text-center leading-0">
          {role}
        </h6>
        <p className="text-justify my-4 md:my-8 pr-4 md:pr-0">{text}</p>
        <span className="transform scale-x-[-1] absolute top-0 left-0 text-[84px] md:text-[110px] leading-[0.8] font-['PlayfairDisplay']">
          ”
        </span>
      </div>
    </div>
  );
};
