import React from 'react';

export interface IContactFormProps {
  inContactPage?: boolean;
}

export const OurClients: React.FC = () => {
  return (
    <section className="w-full mt-16 md:mt-20 2xl:mt-32 px-4 md:px-[8%] md:py-6">
      <div className="flex flex-wrap justify-between items-center flex-col md:flex-row">
        <h3 className="text-base xl:text-[32px] 2xl:text-[42px] font-semibold md:font-regular">Our client:</h3>
        <div className="flex flex-wrap justify-between items-center gap-2 md:gap-16 2xl:gap-24">
          <div className="overflow-hidden w-[56px] lg:w-[96px] xl:w-[120px] 2xl:w-[180px]">
            <img src="/assets/clients/Networld-Asia.png" alt="Client Logo" className="w-full h-auto" />
          </div>

          <div className="overflow-hidden w-[56px] lg:w-[96px] xl:w-[120px] 2xl:w-[180px]">
            <img src="/assets/clients/redcomms.png" alt="Client Logo" className="w-full h-auto" />
          </div>

          <div className="overflow-hidden w-[56px] lg:w-[96px] xl:w-[120px] 2xl:w-[180px]">
            <img src="/assets/clients/TMA.png" alt="Client Logo" className="w-full h-auto" />
          </div>

          <div className="overflow-hidden w-[56px] lg:w-[96px] xl:w-[120px] 2xl:w-[180px]">
            <img src="/assets/clients/cni.png" alt="Client Logo" className="w-full h-auto" />
          </div>

          <div className="overflow-hidden w-[56px] lg:w-[96px] xl:w-[120px] 2xl:w-[180px]">
            <img src="/assets/clients/havas.png" alt="Client Logo" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
