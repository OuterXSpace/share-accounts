import { ProductImageListProps } from './product-image-list.type';

export const ProductImageList: React.FC<ProductImageListProps> = () => {
  return (
    <section className="section-01 mb-[50px]">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="pb-[80px] flex aligns-center justify-center">
              <h2 className="leading-1.3 text-[#f9fdfe] text-[3.75rem] font-bold font-montserrat">
                I can help you with
              </h2>
            </div>
          </div>
          <div className="col-sm-12 container">
            <div className="row">
              <div className="col-sm-4">
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
                <div className="content">
                  <div className="mb-[70px]">
                    <div className="text-[#f9fdfe] text-[1.875rem] leading-1.25 font-bold font-montserrat uppercase">
                      <h6 className="pb-[10px]">Editing</h6>
                    </div>
                    <p className="mb-[0.5rem] text-[#ffffffbf] text-[16px] leading-1.6">
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur
                    </p>
                  </div>
                </div>
              </div>

              {/*  */}
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
                <div className="content">
                  <div className="mb-[70px]">
                    <div className="text-[#f9fdfe] text-[1.875rem] leading-1.25 font-bold font-montserrat uppercase">
                      <h6 className="pb-[10px]">Color Correction</h6>
                    </div>
                    <p className="mb-[0.5rem] text-[#ffffffbf] text-[16px] leading-1.6">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
                      Pellentesque sit amet sapien fringilla, mattis ligula consectetur
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}

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
                <div className="content">
                  <div className="mb-[70px]">
                    <div className="text-[#f9fdfe] text-[1.875rem] leading-1.25 font-bold font-montserrat uppercase">
                      <h6 className="pb-[10px]">Sound Design</h6>
                    </div>
                    <p className="mb-[0.5rem] text-[#ffffffbf] text-[16px] leading-1.6">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                      totam rem aperiam, eaque ipsa quae ab illo inventore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
