import { useSpring, animated } from 'react-spring';
import React from 'react';

export interface IBriefIntroProps {}

export const BriefIntroV1: React.FC<IBriefIntroProps> = () => {
  const { transform: rotateIcon } = useSpring({
    to: { transform: 'rotate(360deg)' },
    from: { transform: 'rotate(0deg)' },
    config: { duration: 3000 },
    loop: true,
  });

  return (
    <div className="w-full flex flex-col px-4 md:px-[19.2%] mt-24 2xl:mt-80 md:mt-60">
      <h2 className="flex flex-wrap flex-row md:flex-col gap-2 md:gap-0 items-start justify-start font-semibold">
        <span className="text-[28px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] leading-tight">Architecture,</span>
        <span className="text-[28px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] leading-tight">Interior, and</span>
        <span className="text-[28px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] leading-tight">Landscape</span>
        <span className="text-[28px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] leading-tight">design</span>
      </h2>

      <div>
        <span>
          <animated.svg
            width="44"
            height="44"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: rotateIcon }}
          >
            <path
              d="M18.7637 35L19.3407 23.1319L15.3846 34.3407L13.0769 33.4341L18.1868 22.6374L10.2747 31.5385L8.46154 29.7253L17.3626 21.8132L6.56593 26.9231L5.65934 24.6154L16.8681 20.6593L5 21.2363V18.7637L16.8681 19.4231L5.65934 15.3846L6.56593 13.1593L17.3626 18.2692L8.46154 10.2747L10.2747 8.54396L18.1868 17.3626L13.0769 6.64835L15.3846 5.65934L19.3407 16.9505L18.7637 5H21.2363L20.5769 16.8681L24.6154 5.65934L26.8407 6.64835L21.7308 17.3626L29.7253 8.54396L31.456 10.2747L22.6374 18.2692L33.3516 13.1593L34.3407 15.3846L23.0494 19.4231L35 18.7637V21.2363L23.0494 20.6593L34.3407 24.6154L33.3516 26.9231L22.6374 21.8132L31.456 29.7253L29.7253 31.5385L21.7308 22.6374L26.8407 33.4341L24.6154 34.3407L20.5769 23.1319L21.2363 35H18.7637Z"
              fill="#303231"
            />
          </animated.svg>
        </span>
      </div>

      <div className="my-12 md:my-20 2xl:my-28 mr-8 md:mr-0">
        <p className="text-base 2xl:text-[26px] leading-6 2xl:leading-9">
          Incorporating a mix of youthful designers and seasoned engineers, we consistently infuse each product with
          originality, contemporary innovation, and careful attention to detail to ensure top-notch results.
        </p>
      </div>
    </div>
  );
};
