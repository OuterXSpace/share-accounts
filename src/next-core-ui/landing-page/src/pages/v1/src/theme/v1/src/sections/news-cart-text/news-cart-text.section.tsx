import Link from 'next/link';
import { NewCartTextProps } from './news-cart-text.type';

export const NewCartText: React.FC<NewCartTextProps> = (props) => {
  const { data, className } = props;

  return (
    <div id={data?.object?.id} className={`${className} about-us grid-wrapper bg-gray-20`}>
      <div className="grid grid-cols-4 md:grid-cols-8 py-20 md:py-38">
        <div className="col-span-4 md:col-span-6 md:col-start-2 xl:col-span-4 xl:col-start-3 text-center">
          <h2 className="text-wm-black type-epsilon mb-4">{data?.object?.title}</h2>
          <p className="type-paragraph md:px-12 mb-8 md:mb-10 text-wm-black">{data?.object?.description}</p>
          <Link href="/contact" target="" className="type-button">
            {data?.object?.button?.label}
          </Link>
        </div>
      </div>
    </div>
  );
};
