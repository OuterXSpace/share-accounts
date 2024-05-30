import { ProductVideoListProps } from './product-video-list.type';

export const ProductVideoList: React.FC<ProductVideoListProps> = () => {
  return (
    <section className="section-01 mb-[50px]">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="pb-[80px] flex aligns-center justify-center">
              <h2 className="leading-1.3 text-[#f9fdfe] text-[3.75rem] font-bold font-montserrat">Recent Work</h2>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-4 sm:col-sm-12 md:col-sm-12 lg:col-sm-4">
                <div className="video mb-[20px]">
                  <iframe
                    width="100%"
                    height="250px"
                    src="https://www.youtube.com/embed/ZtjH22qJXSA?si=LqXVIwAjblWemD8n"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="content pb-[30px] min-w-full">
                  <a
                    href=""
                    className="leading-1 text-15 font-medium fill-[#ffffffbf] text-[#ffffffbf] bg-[#02010100] border-[none] p-0"
                  >
                    <span className="elementor-button-text">Volkswagen - 2023 Ad</span>
                  </a>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="video mb-[20px]">
                  <iframe
                    width="100%"
                    height="250px"
                    src="https://www.youtube.com/embed/zHKRk4huTzg?si=nC4_XXN4INwW7lH5"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="content pb-[30px] min-w-full">
                  <a
                    href=""
                    className="leading-1 text-15 font-medium fill-[#ffffffbf] text-[#ffffffbf] bg-[#02010100] border-[none] p-0"
                  >
                    <span className="elementor-button-text">Volkswagen - 2023 Ad</span>
                  </a>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="video mb-[20px]">
                  <iframe
                    width="100%"
                    height="250px"
                    src="https://www.youtube.com/embed/W4oXEdZz3Z0?si=IN5tXgscRYpyC0g5"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="content pb-[30px] min-w-full">
                  <a
                    href=""
                    className="leading-1 text-15 font-medium fill-[#ffffffbf] text-[#ffffffbf] bg-[#02010100] border-[none] p-0"
                  >
                    <span className="elementor-button-text">Volkswagen - 2023 Ad</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12">
          <div className=" flex justify-center aligns-center pt-[50px] transition-[background,border,border-radius,box-shadow,transform] duration-300">
            <a
              href=""
              className="border-[0] pt-[15px] pr-[30px] pb-[15px] pl-[30px] text-1 font-montserrat font-bold leading-1 border-[#97c584] bg-[#97c584] border-solid border-t-2 border-r-2 border-l-2 border-b-2 font-montserrat font-bold text-16 text-1 leading-1 inline-block text-center transition-all duration-300 fill-[#fff]"
            >
              <span className="flex justify-center">
                <span className="flex-grow order-10 inline-block">View all</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
