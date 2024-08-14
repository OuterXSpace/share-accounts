import Link from 'next/link';
import { ILandingPageFooterV1Props } from './footer.type';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import InlineSVG from 'svg-inline-react';

export const LandingPageFooterV1: React.FC<ILandingPageFooterV1Props> = (props) => {
  const { data, className } = props;

  return (
    <footer className="pt-8 pb-28">
      <div className="grid-wrapper-sm">
        <div className="md:grid md:grid-cols-8 mb-6 pb-8 border-b border-black-20">
          <div className="mb-8 lg:mb-0 md:col-span-2">
            <a href="/" className="w-48 block">
              <LazyLoadImage
                src={data?.object?.logoText}
                className="custom-logo astra-logo-img h-[33px]"
                alt="Logo"
                effect="blur"
              />
            </a>
          </div>
          <div className="footer-social-media flex items-center md:justify-end md:col-span-6">
            {data?.object?.social?.map((item) => {
              const { id, link, svgIcon } = item;
              return (
                <Link key={id} className="mr-8 last:mr-0 w-5 block text-light-navy" href={link}>
                  <span className="icon">{svgIcon && <InlineSVG src={svgIcon} />}</span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap lg:items-center lg:justify-between">
          <div className="w-full order-2 lg:order-1 mt-12 lg:mt-0 lg:w-auto lg:shrink-0 lg:mr-8">
            <p className="type-paragraph-sm font-medium text-wm-black">{data?.object?.text}</p>
          </div>
          <nav className="w-full grid grid-cols-2 gap-y-6 md:gap-y-8 gap-x-10 lg:grid-flow-col lg:auto-cols-max lg:order-2 lg:w-auto">
            {data?.object?.static?.map((item) => {
              const { id, label, link } = item;
              return (
                <Link
                  key={id}
                  href={link}
                  className=" type-paragraph-sm font-medium text-wm-black col-span-1 hover-underline"
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
};
