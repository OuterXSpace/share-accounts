import Link from 'next/link';
import { FooterV2Props } from './footer.type';

export const FooterV2: React.FC<FooterV2Props> = (props) => {
  const { data, className } = props;

  return (
    <footer className={`section ${className}`}>
      <div className="container">
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
                  <h3 className="tracking-[-0.02vw] text-[4.5vw] mb-[6vw] lg:text-[1.3vw] lg:mb-[2vw]">SERVICES</h3>
                  <div className="inline-flex flex-col gap-2 justify-start items-start">
                    <Link
                      href="https://www.lt-serv.com/services#devops-solutions"
                      className="z-10 no-underline pb-1 text-[3.5vw] text-[#938388] lg:text-[1vw]"
                    >
                      DevOps
                    </Link>
                    <Link
                      href="https://www.lt-serv.com/services#data-management"
                      className="z-10 no-underline pb-1 text-[3.5vw] text-[#938388] lg:text-[1vw]"
                    >
                      Data Management
                    </Link>
                    <Link
                      href="https://www.lt-serv.com/services#enterprise-solutions"
                      className="z-10 no-underline pb-1 text-[3.5vw] text-[#938388] lg:text-[1vw]"
                    >
                      Enterprise Solutions
                    </Link>
                    <Link
                      href="https://www.lt-serv.com/services#quality-assurance"
                      className="z-10 no-underline pb-1 text-[3.5vw] text-[#938388] lg:text-[1vw]"
                    >
                      Quality Assurance
                    </Link>
                    <Link
                      href="./crm.html"
                      className="z-10 no-underline pb-1 text-[3.5vw] text-[#938388] lg:text-[1vw]"
                    >
                      CRM Solutions
                    </Link>
                    <Link
                      href="https://www.lt-serv.com/services#in-tech-solutions"
                      className="z-10 no-underline pb-1 text-[3.5vw] text-[#938388] lg:text-[1vw]"
                    >
                      In-Tech Solutions
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="tracking-[-0.02vw] text-[4.5vw] lg:text-[1.3vw] mb-[6vw] lg:mb-[2vw]">ADDRESS</h3>
                  <p className="text-[3.5vw] lg:text-[1vw] text-[#938388]">
                    12 Archiepiskopou Makariou <br />
                    Avenue Ill, Office No. 201, ZAVOS
                    <br />
                    KRISTELLINA TOWER, 4000, Mesa <br />
                    Geitonia, Limassol, Cyprus
                  </p>
                </div>
                <div>
                  <h3 className="tracking-[-0.02vw] text-[4.5vw] mb-[6vw] lg:mb-[2vw] lg:text-[1.3vw]">CONTACT</h3>
                  <p className="text-[3.5vw] lg:text-[1vw] text-[#938388]">
                    info@lt-serv.com
                    <br />
                    +357 25 334567
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
