import React from 'react';
import { INewImageTextSectionShareAccountTheme01Props } from './new-image-text-section.sections.type';

export const NewImageTextSectionShareAccountTheme01: React.FC<INewImageTextSectionShareAccountTheme01Props> = (
  props,
) => {
  const { data } = props;

  return (
    <div className="container flex flex-col items-center mt-[30px] p-6 bg-[50% 50%]">
      <div className="row">
        <div className="section-body">
          <div className="flex flex-col">
            <div className="flex flex-col justify-center gap-2">
              <h5 className="text-[20px] md:text-[44px] font-bold text-accent">{data?.object?.content?.title}</h5>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="text-lg font-light leading-[1.7em] text-white">{data?.object?.content?.description}</div>
              <div className="flex items-center justify-center">
                <img
                  className="w-full h-full"
                  src={data?.object?.content?.imageUrl}
                  alt={data?.object?.content?.title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
