import React from 'react';

export const VastProject: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-[8%] my-12 flex flex-wrap flex-col gap-6">
      <h4 className="w-full relative text-base md:text-[26px] 2xl:text-[42px] font-semibold mb-0 md:mb-12">
        The last various projects we have have been completed
        <div className="absolute top-[100%] left-0 block md:hidden pb-2 w-full border-b-[1px] border-[#D6D6D6]" />
      </h4>
      <div className="flex flex-wrap justify-between gap-x-12 gap-y-20">
        <div className="flex flex-col w-full md:w-[calc(48%-8px)] gap-4">
          <div className="overflow-hidden max-h-[390px]">
            <img src="/assets/last_project_1.jpg" alt="Project11" />
          </div>
          <div className="w-full md:w-8/12 flex justify-between items-end pb-2 border-b-[1px] border-[#D6D6D6]">
            <h6 className="text-base uppercase text-[#979898] font-semibold">Design</h6>
            <p className="text-base font-bold">2022</p>
          </div>
          <div className="flex gap-4 items-center">
            <h5 className="text-[26px] leading-none">Zenta House</h5>
            {/* <ArrowRight /> */}
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[calc(48%-8px)] gap-4">
          <div className="overflow-hidden max-h-[390px]">
            <img src="/assets/last_project_2.jpg" alt="Project11" />
          </div>
          <div className="w-full md:w-8/12 flex justify-between items-end pb-2 border-b-[1px] border-[#D6D6D6]">
            <h6 className="text-base uppercase text-[#979898] font-semibold">Design</h6>
            <p className="text-base font-bold">2023</p>
          </div>
          <div className="flex gap-4 items-center">
            <h5 className="text-[26px] leading-none">Zenta Villa</h5>
            {/* <ArrowRight /> */}
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[calc(48%-8px)] gap-4">
          <div className="overflow-hidden max-h-[390px]">
            <img src="/assets/last_project_2.jpg" alt="Project11" />
          </div>
          <div className="w-full md:w-8/12 flex justify-between items-end pb-2 border-b-[1px] border-[#D6D6D6]">
            <h6 className="text-base uppercase text-[#979898] font-semibold">Design</h6>
            <p className="text-base font-bold">2023</p>
          </div>
          <div className="flex gap-4 items-center">
            <h5 className="text-[26px] leading-none">Zenta Villa</h5>
            {/* <ArrowRight /> */}
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[calc(48%-8px)] gap-4">
          <div className="overflow-hidden max-h-[390px]">
            <img src="/assets/last_project_2.jpg" alt="Project11" />
          </div>
          <div className="w-full md:w-8/12 flex justify-between items-end pb-2 border-b-[1px] border-[#D6D6D6]">
            <h6 className="text-base uppercase text-[#979898] font-semibold">Design</h6>
            <p className="text-base font-bold">2023</p>
          </div>
          <div className="flex gap-4 items-center">
            <h5 className="text-[26px] leading-none">Zenta Villa</h5>
            {/* <ArrowRight /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
