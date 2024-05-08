import React from "react";
import { TestimonialItem } from "@/components/testimonial-item/testimonial-item.component";
import { Carousel } from "react-responsive-carousel";
import { testimonials } from "./testimonial.tempdata";
import { ArrowLeft } from "@/svg/arrow-left.svg";
import { ArrowRight } from "@/svg/arrow-right.svg";

export const Testimonial: React.FC = () => {
  return (
    <section className="ml-4 md:ml-[8%] mr-4 md:mr-0 mt-12 md:mt-40 mb-8 overflow-hidden bg-white ">
      <div className="flex flex-col mb-2 md:mb-16">
        <h4 className="w-full text-[26px] md:text-[42px] font-semibold underline">
          TESTIMONIAL
        </h4>
      </div>

      <div className="bg-white ">
        <Carousel
          className="carousel-testimonial"
          showArrows
          autoPlay={false}
          showThumbs={false}
          transitionTime={2000}
          showIndicators={false}
          showStatus={false}
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`absolute h-2 top-[95%] md:-top-[84px] left-20 md:left-[452px] flex justify-center items-center opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <ArrowLeft />
              </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`absolute h-2 top-[95%] md:-top-[84px] left-auto md:left-[536px] right-20 md:right-auto flex justify-center items-center opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <ArrowRight />
              </div>
            );
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialItem key={index} {...testimonial} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};
