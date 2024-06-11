import Link from 'next/link';
import { BreadcrumbV4Props } from './breadcrumb.type';

export const BreadcrumbV4: React.FC<BreadcrumbV4Props> = (props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-wrap items-center gap-x-4">
        <nav
          data-el="bic-c-breadcrumb"
          className="bic-c-breadcrumb overflow-x-auto md:overflow-x-visible scroll-hidden flex "
          aria-label="breadcrumb"
        >
          <ol className="inline-flex pl-0 list-none items-baseline [&>li:nth-last-child(2)>span]:text-grey-600 dark:[&>li:nth-last-child(2)>span]:text-grey-400">
            <li className="text-blue-600 dark:text-blue-50 dropdown">
              <Link
                href="https://vn.beincrypto.com"
                className="font-sans font-normal whitespace-nowrap p4 text-currentColor hover:underline"
              >
                Home
              </Link>
              <span className="bic-c-breadcrumb-divisor">/</span>
            </li>
            <li className="inline-flex items-center text-grey-600 dark:text-grey-400" aria-current="page">
              <Link
                href="https://vn.beincrypto.com/thi-truong/"
                style={{}}
                className="whitespace-nowrap inline-flex items-center p4 font-sans font-normal text-currentColor hover:underline"
              >
                Thị trường
              </Link>
              <span className="bic-c-breadcrumb-divisor hidden">/</span>
            </li>
          </ol>
        </nav>
        <Link
          href="https://vn.beincrypto.com/tin-moi/"
          className="whitespace-nowrap hover:underline [.dark_&]:text-white"
          title="Tin tức"
          style={{ color: '#e25500' }}
        >
          <span className="tpw tpw_style1 tpw_5686 text-3.5" style={{ color: '#e25500' }}>
            Tin tức
          </span>
        </Link>
      </div>
    </div>
  );
};
