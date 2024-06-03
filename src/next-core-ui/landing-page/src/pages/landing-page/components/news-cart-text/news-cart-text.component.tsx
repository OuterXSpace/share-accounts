import { NewCartTextProps } from './news-cart-text.type';

export const NewCartText: React.FC<NewCartTextProps> = () => {
  return (
    <section className="section-01 md:py-[100px] lg:py-[150px]">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div>
              <h3 className="text-[#f9fdfe] text-[2.125rem] lg:text-[3.25rem] font-bold font-montserrat leading-1.3 px-4">
                I’m Mark, a professional video editor & film maker
              </h3>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-[20px] px-4">
              <p className="mb-[0.5rem] text-[#ffffffbf] text-[16px] leading-1.6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
                Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
                mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum
                eu.
              </p>
            </div>
            <div className="px-4 transition-[background,border,border-radius,box-shadow,transform] duration-300">
              <a
                href=""
                className="border-[0] pt-[15px] pr-[30px] pb-[15px] pl-[30px] text-1 font-montserrat font-bold leading-1 border-[#97c584] bg-[#97c584] border-solid border-t-2 border-r-2 border-l-2 border-b-2 font-montserrat font-bold text-16 text-1 leading-1 inline-block text-center transition-all duration-300 fill-[#fff]"
              >
                <span className="flex justify-center">
                  <span className="flex-grow order-10 inline-block">Read more</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
