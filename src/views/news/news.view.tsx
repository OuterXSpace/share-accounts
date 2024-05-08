import { AngleLeft } from "@/svg/angle-left.svg";
import { AngleRight } from "@/svg/angle-right.svg";
import { ArrowRight } from "@/svg/arrow-right.svg";
import React from "react";
import { Carousel } from "react-responsive-carousel";

export const News: React.FC = (props) => {
  return (
    <section className="pl-[8%] mt-32 mb-12 overflow-hidden">
      <div className="flex flex-col">
        <h4 className="w-full mb-8 text-[42px] font-semibold underline">
          NEWS
        </h4>
      </div>

      <div className="bg-white">
        <Carousel
          className="carousel-news"
          showArrows
          autoPlay={false}
          showThumbs={false}
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
                className={`absolute h-2 -top-[52px] left-[452px] flex justify-center items-center opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <AngleLeft />
              </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`absolute h-2 -top-[52px] left-[568px] flex justify-center items-center opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <AngleRight />
              </div>
            );
          }}
        >
          <div className="w-full grid grid-cols-12 gap-5">
            <div className="col-span-7 overflow-hidden max-h-[400px]">
              <img src="/assets/news_1.jpg" alt="news1" />
            </div>
            <div className="col-span-5 my-auto flex flex-col gap-4 justify-start items-start pr-10">
              <h4 className="text-[26px] text-left">
                Construction and Building
              </h4>
              <p className="text-justify">
                DQH Architects has an experienced construction team with a fully
                equipped 3000m2 production workshop that follows the latest
                technology trends. We are confident that our ability,
                responsibility, and meticulousness in each product will bring
                peace of mind and satisfaction to our customers. We are
                committed to honesty in product quality and uphold our
                reputation with fast and dedicated warranty service.
              </p>
              <svg
                width="44"
                height="14"
                viewBox="0 0 44 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.5 6.5L42.5 6.5V7.5L0.5 7.5L0.5 6.5Z"
                  fill="#303231"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36.2929 12.9999L42.2929 6.99992L36.2929 0.999925L37 0.292818L43.7071 6.99992L37 13.707L36.2929 12.9999Z"
                  fill="#303231"
                />
              </svg>
            </div>
          </div>
          <div className="w-full grid grid-cols-7 gap-10">
            <div className="col-span-4 overflow-hidden max-h-[400px]">
              <img src="/assets/news_1.jpg" alt="news1" />
            </div>
            <div className="col-span-3 my-auto flex flex-col gap-4 justify-start items-start pr-10">
              <h4 className="text-[26px] text-left">
                Construction and Building
              </h4>
              <p className="text-justify">
                DQH Architects has an experienced construction team with a fully
                equipped 3000m2 production workshop that follows the latest
                technology trends. We are confident that our ability,
                responsibility, and meticulousness in each product will bring
                peace of mind and satisfaction to our customers. We are
                committed to honesty in product quality and uphold our
                reputation with fast and dedicated warranty service.
              </p>
              <svg
                width="44"
                height="14"
                viewBox="0 0 44 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.5 6.5L42.5 6.5V7.5L0.5 7.5L0.5 6.5Z"
                  fill="#303231"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36.2929 12.9999L42.2929 6.99992L36.2929 0.999925L37 0.292818L43.7071 6.99992L37 13.707L36.2929 12.9999Z"
                  fill="#303231"
                />
              </svg>
            </div>
          </div>
          <div></div>
        </Carousel>
      </div>
    </section>
  );
};
