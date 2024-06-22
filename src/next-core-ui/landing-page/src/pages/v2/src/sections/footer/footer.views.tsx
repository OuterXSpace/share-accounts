import Link from 'next/link';
import { FooterV2Props } from './footer.type';

export const FooterV2: React.FC<FooterV2Props> = (props) => {
  const { data, className } = props;

  return (
    <footer className={`section ${className} px-[5.5vw]`}>
      <div className="mt-[15vw]">
        <div className="relative my-[25vw] lg:mb-[13vw] lg:grid lg:grid-cols-11 gap-[2.2vw] flex flex-col-reverse">
          <div className="flex justify-start items-start">
            <img
              src="https://assets-global.website-files.com/6618e637b1708fa9ebdf54ae/662529fa7a4aea81f88af1b9_lot-logo-white.svg"
              loading="lazy"
              alt="logo"
              className="w-full lg:min-w-[18vw] lg:max-w-[18vw] self-end"
            />
          </div>
          <div className="lg:row-start-1 lg:col-start-4 lg:row-end-2 lg:col-end-12">
            <div className="lg:grid lg:grid-cols-3 lg:gap-4 gap-[10vw] justify-items-stretch flex flex-col">
              <div>
                <h3 className="tracking-[-0.02vw] text-[4.5vw] mb-[6vw] md:text-[3vw] md:mb-[3vw] lg:text-[1.3vw] lg:mb-[2vw]">
                  SERVICES
                </h3>
                <div className="inline-flex flex-col gap-2 justify-start items-start">
                  <Link
                    href="/"
                    className="z-10 no-underline pb-1 text-[3.5vw] text-[#938388] md:text-[2vw] lg:text-[1vw] after:block after:content-[''] after:border-b after:border-b-[1px] after:border-[#fff] after:pb-[0.2vw] after:m-auto after:text-left after:origin-[100%_0%] after:transform after:scale-x-0 after:ease-in-out after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-[0%_50%]"
                  >
                    DevOps
                  </Link>
                  <Link
                    href="/"
                    className="z-10 no-underline pb-1 text-[3.5vw] md:text-[2vw] text-[#938388] lg:text-[1vw] after:block after:content-[''] after:border-b after:border-b-[1px] after:border-[#fff] after:pb-[0.2vw] after:m-auto after:text-left after:origin-[100%_0%] after:transform after:scale-x-0 after:ease-in-out after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-[0%_50%]"
                  >
                    Data Management
                  </Link>
                  <Link
                    href="/"
                    className="z-10 no-underline pb-1 text-[3.5vw] md:text-[2vw] text-[#938388] lg:text-[1vw] after:block after:content-[''] after:border-b after:border-b-[1px] after:border-[#fff] after:pb-[0.2vw] after:m-auto after:text-left after:origin-[100%_0%] after:transform after:scale-x-0 after:ease-in-out after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-[0%_50%]"
                  >
                    Enterprise Solutions
                  </Link>
                  <Link
                    href="/"
                    className="z-10 no-underline pb-1 text-[3.5vw] md:text-[2vw] text-[#938388] lg:text-[1vw] after:block after:content-[''] after:border-b after:border-b-[1px] after:border-[#fff] after:pb-[0.2vw] after:m-auto after:text-left after:origin-[100%_0%] after:transform after:scale-x-0 after:ease-in-out after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-[0%_50%]"
                  >
                    Quality Assurance
                  </Link>
                  <Link
                    href="/"
                    className="z-10 no-underline pb-1 text-[3.5vw] md:text-[2vw] text-[#938388] lg:text-[1vw] after:block after:content-[''] after:border-b after:border-b-[1px] after:border-[#fff] after:pb-[0.2vw] after:m-auto after:text-left after:origin-[100%_0%] after:transform after:scale-x-0 after:ease-in-out after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-[0%_50%]"
                  >
                    CRM Solutions
                  </Link>
                  <Link
                    href="/"
                    className="z-10 no-underline pb-1 text-[3.5vw] md:text-[2vw] text-[#938388] lg:text-[1vw] after:block after:content-[''] after:border-b after:border-b-[1px] after:border-[#fff] after:pb-[0.2vw] after:m-auto after:text-left after:origin-[100%_0%] after:transform after:scale-x-0 after:ease-in-out after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-[0%_50%]"
                  >
                    In-Tech Solutions
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="tracking-[-0.02vw] text-[4.5vw] lg:text-[1.3vw] mb-[6vw]  md:mb-[3vw] md:text-[3vw] lg:mb-[2vw]">
                  ADDRESS
                </h3>
                <p className="text-[3.5vw] md:text-[2vw] lg:text-[1vw] text-[#938388]">
                  12 Archiepiskopou Makariou <br />
                  Avenue Ill, Office No. 201, ZAVOS
                  <br />
                  KRISTELLINA TOWER, 4000, Mesa <br />
                  Geitonia, Limassol, Cyprus
                </p>
              </div>
              <div>
                <h3 className="tracking-[-0.02vw] text-[4.5vw] mb-[6vw] md:mb-[3vw] lg:mb-[2vw] md:text-[3vw] lg:text-[1.3vw]">
                  CONTACT
                </h3>
                <p className="text-[3.5vw] md:text-[2vw] lg:text-[1vw] text-[#938388]">
                  info@lt-serv.com
                  <br />
                  +357 25 334567
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
