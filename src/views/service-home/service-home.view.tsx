import React from "react";
import Link from "next/link";
import { ArrowLeft } from "@/svg/arrow-left.svg";
import { ArrowRight } from "@/svg/arrow-right.svg";

export const ServiceHome: React.FC = (props) => {
  return (
    <section className="w-full gap-0 mt-24 md:mt-32 2xl:mt-36 mb-12 px-4 md:px-[8%]">
      {/* Title and description */}
      <div className="w-full md:w-8/12">
        <div className="flex flex-col gap-6 md:gap-8 items-start">
          <h4 className="flex flex-col gap-0">
            <span className="text-[26px] leading-tight">
              Architecture Design -
            </span>
            <span className="text-[26px] leading-tight">Interior Design</span>
          </h4>
          <div className="flex flex-wrap justify-between flex-col md:flex-row w-full md:w-[70%] items-start md:items-end gap-3 md:gap-0">
            <p className="text-justify w-full md:w-8/12">
              When you choose DQH Architects, you can rest assured about the
              perfect and meticulous start for your dream home. With years of
              experience in various projects across different sectors, DQH
              confidently ensures customer satisfaction with reasonable costs in
              investment.
            </p>
            <ArrowRight />
          </div>
        </div>
      </div>

      <div className="w-full mt-8 md:mt-16 flex flex-col md:flex-row items-center flex-wrap md:items-stretch">
        <div className="w-full md:w-8/12 flex items-start">
          <div className="w-full md:w-[70%] flex justify-center overflow-hidden max-h-[700px] md:max-h-[810px]">
            <img
              src="/assets/home/service_main.jpg"
              alt="services"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="w-full md:w-4/12 md:flex-1 flex flex-col-reverse md:flex-col justify-between gap-5 md:gap-8 items-start relative mt-10 md:mt-0">
          <div className="flex justify-center overflow-hidden w-full mt-10 md:mt-0 max-h-[440px]">
            <img
              src="/assets/sub_services.jpg"
              alt="sub_services"
              className="w-full h-full"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[26px]">Construction and Building</h4>
            <p className="text-justify">
              DQH Architects has an experienced construction team with a fully
              equipped 3000m2 production workshop that follows the latest
              technology trends. We are confident that our ability,
              responsibility, and meticulousness in each product will bring
              peace of mind and satisfaction to our customers. We are committed
              to honesty in product quality and uphold our reputation with fast
              and dedicated warranty service.
            </p>
            <div className="mt-3">
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
