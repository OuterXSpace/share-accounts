import React from 'react';
import { ArrowRight } from '../../../svg/arrow-right.svg';

export const SelectedProjectSliderV1: React.FC = () => {
  return (
    <div className="w-full flex flex-wrap md:justify-between">
      <div className="w-full md:w-8/12 flex flex-wrap md:flex-col gap-4 pl-0.5 pr-0.5">
        <div className="w-full md:w-10/12 overflow-hidden h-auto md:max-h-[540px]">
          <img src="/assets/selected_1.jpg" alt="Project1" />
        </div>
        <div className="w-full md:w-8/12 flex justify-between items-end pb-2 border-b-[1px] border-[#D6D6D6]">
          <h4 className="text-[26px] font-semebold">Zenta House</h4>
          <h5 className="text-base font-bold">2022</h5>
        </div>
        <div className="flex flex-col gap-0">
          <span className="text-left">Investor: Zenta House - Mr. Chương - Ms. Nụ</span>
          <span className="text-left">Location: 69A Nguyễn Văn Trỗi, Ward 2, Bảo Lộc, Lâm Đồng</span>
          <span className="text-left">Facebook: www.facebook.com/zentahouse</span>
        </div>
        <ArrowRight />
      </div>

      <div className="w-full md:w-4/12 flex flex-col gap-4 mt-10 md:mt-0 pl-0.5 pr-0.5 md:pr-6">
        <div className="w-full overflow-hidden h-auto md:max-h-[540px]">
          <img src="/assets/selected_2.jpg" alt="Project2" />
        </div>
        <div className="w-full flex justify-between items-end pb-2 border-b-[1px] border-[#D6D6D6]">
          <h4 className="text-[26px] font-semebold">Zenta Villa</h4>
          <h5 className="text-base font-bold">2022</h5>
        </div>
        <div className="flex flex-col gap-0">
          <span className="text-left">Investor: Zenta House - Mr. Chương - Ms. Nụ</span>
          <span className="text-left">Location: 69A Nguyễn Văn Trỗi, Ward 2, Bảo Lộc, Lâm Đồng</span>
          <span className="text-left">Facebook: www.facebook.com/zentahouse</span>
        </div>
        <ArrowRight />
      </div>
    </div>
  );
};
