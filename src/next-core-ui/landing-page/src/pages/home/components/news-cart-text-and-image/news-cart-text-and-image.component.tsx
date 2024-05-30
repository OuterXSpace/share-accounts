import { NewCartTextAndImageProps } from './news-cart-text-and-image.type';

export const NewCartTextAndImage: React.FC<NewCartTextAndImageProps> = () => {
  return (
    <section className="section-01 mb-[50px]">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="pt-[50px]">
              <img
                decoding="async"
                width={676}
                height={650}
                src="https://websitedemos.net/video-editor-04/wp-content/uploads/sites/1219/2023/03/2-opt.png"
                srcSet="https://websitedemos.net/video-editor-04/wp-content/uploads/sites/1219/2023/03/2-opt.png 676w, https://websitedemos.net/video-editor-04/wp-content/uploads/sites/1219/2023/03/2-opt-300x288.png 300w, https://websitedemos.net/video-editor-04/wp-content/uploads/sites/1219/2023/03/2-opt-600x577.png 600w, https://websitedemos.net/video-editor-04/wp-content/uploads/sites/1219/2023/03/2-opt-400x385.png 400w"
                sizes="(max-width: 676px) 100vw, 676px"
                className="attachment-full size-full wp-image-130"
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-6 pt-[50px]">
            <div className="mb-[70px]  pl-[50px]">
              <div className="text-[#f9fdfe] text-1.125 leading-1.25 font-bold font-montserrat uppercase">
                <h6 className="pb-[10px]">Efficient</h6>
              </div>
              <p className="mb-[0.5rem] text-[#ffffffbf] text-[16px] leading-1.6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
                Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
                mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum
                eu.
              </p>
            </div>
            <div className="mb-[70px]  pl-[50px]">
              <div className="text-[#f9fdfe] text-1.125 leading-1.25 font-bold font-montserrat uppercase">
                <h6 className="pb-[10px]">PROFESSIONAL</h6>
              </div>
              <p className="mb-[0.5rem] text-[#ffffffbf] text-[16px] leading-1.6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore
              </p>
            </div>
            <div className="mb-[70px]  pl-[50px]">
              <div className="text-[#f9fdfe] text-1.125 leading-1.25 font-bold font-montserrat uppercase">
                <h6 className="pb-[10px]">EXPERIENCED</h6>
              </div>
              <p className="mb-[0.5rem] text-[#ffffffbf] text-[16px] leading-1.6">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
