import React from "react";
import { IFooterProps } from "./footer.type";
import Link from "next/link";
import { BreakLine } from "@/components/break-line/break-line.component";
import { CopyRight } from "@/components/copy-right/copy-right.component";

const prefixClassName = "footer";

export const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <footer>
      <div className="px-4 md:px-[8%] w-full">
        <div className="w-full my-4 md:my-16 flex flex-wrap justify-between">
          <div className="flex flex-wrap justify-start items-start py-4 md:py-0">
            <img
              src="/assets/Logo.png"
              alt="DQH ARCHITECTS"
              className="w-[225px] h-auto"
            />
          </div>
          {/* <h3 className="w-full md:w-3/12 flex items-start text-base md:text-[26px] gap-[2px]">
            DQH ARCHITECTS
            <span className="text-[14px] font-normal pt-[5px]">©</span>
          </h3> */}

          <div className="w-full md:w-9/12 flex gap-4 md:gap-0 flex-wrap flex-col md:flex-row pt-2 justify-start md:justify-end">
            <div className="min-h-[56px] pr-4 flex flex-col">
              <span>Phone: 035.666.8351 - Mr. Quang</span>
              <span>Email: qh.architects@gmail.com</span>
            </div>
            <div className="w-full md:w-3/12 text-left md:text-justify px-0 md:px-4 min-h-[56px] border-l-none md:border-l-[1px]">
              Office 01: 17G.09 Mieu Noi Apartment, Vu Huy Tan Street, Ward 3,
              Binh Thanh District, City. HCM
            </div>
            <div className="w-full md:w-3/12 text-left md:text-justify px-0 md:px-4 min-h-[56px] border-l-none md:border-l-[1px]">
              Office 02: 452L Tran Phu, Ward 2, City. Bao Loc, Lam Dong Province
            </div>
            <div className="w-full md:w-3/12 text-left md:text-justify px-0 md:px-4 min-h-[56px] border-l-none md:border-l-[1px]">
              Factory: Phan Thi Tu Street, Vinh Loc A Commune, Binh Chanh
              District, City. HCM
            </div>
          </div>
        </div>

        <div className="w-full mt-4 md:mt-16 mb-4 md:mb-0 flex justify-between md:justify-end items-center gap-8">
          <h5 className="uppercase underline font-semibold text-base md:text-[26px]">
            Facebook
          </h5>
          <h5 className="uppercase underline font-semibold text-base md:text-[26px]">
            Instagram
          </h5>
          <h5 className="uppercase underline font-semibold text-base md:text-[26px]">
            Youtube
          </h5>
        </div>
      </div>

      <BreakLine />

      <CopyRight />
    </footer>
  );
};
