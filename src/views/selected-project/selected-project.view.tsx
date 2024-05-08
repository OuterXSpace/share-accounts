import SelectedProjectSlider from "@/components/selected-project-slider/selected-project-slider.component";
import { AngleLeft } from "@/svg/angle-left.svg";
import { AngleRight } from "@/svg/angle-right.svg";
import { ArrowRight } from "@/svg/arrow-right.svg";
import React from "react";
import { Carousel } from "react-responsive-carousel";

export const SelectedProject: React.FC = () => {
  return (
    <section className="w-full mt-6 md:mt-20 2xl:mt-32 mb-12 px-4 md:pl-[8%] md:pr-[calc(8%-24px)]">
      <div className="flex flex-col">
        <h4 className="w-full mb-8 text-[26px] md:text-[42px] font-semibold underline">
          SELECTED PROJECTS
        </h4>

        {/* Carousel wrapper */}
        <div className="w-full bg-white">
          <Carousel
            className="carousel-selected-project"
            showArrows
            autoPlay={false}
            showThumbs={false}
            infiniteLoop
            transitionTime={2000}
            showIndicators
            statusFormatter={(current, total) =>
              `${current < 10 ? `0${current}` : current}/${
                total < 10 ? `0${total}` : total
              }`
            }
            renderArrowPrev={(clickHandler, hasPrev) => {
              return (
                <div
                  className={`hidden md:block absolute h-2 -top-[52px] md:-top-[58px] right-[148px] flex justify-center items-center opacity-30 hover:opacity-100 cursor-pointer z-20`}
                  onClick={clickHandler}
                >
                  <AngleLeft />
                </div>
              );
            }}
            renderArrowNext={(clickHandler, hasNext) => {
              return (
                <div
                  className={`hidden md:block absolute h-2 -top-[52px] md:-top-[58px] right-[24px] flex justify-center items-center opacity-30 hover:opacity-100 cursor-pointer z-20`}
                  onClick={clickHandler}
                >
                  <AngleRight />
                </div>
              );
            }}
          >
            <SelectedProjectSlider />

            <SelectedProjectSlider />

            <SelectedProjectSlider />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
