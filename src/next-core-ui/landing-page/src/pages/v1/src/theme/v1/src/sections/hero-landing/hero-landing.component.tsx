import { IHeroLandingSectionProps } from './hero-landing.type';

export const HeroLandingSection: React.FC<IHeroLandingSectionProps> = (props) => {
  const { data, className } = props;

  return (
    <div
      className="cmpt__hero_landing overflow-hidden bg-white before:opacity-70 before:-z-1 bg-cover bg-no-repeat bg-cover bg-no-repeat gradient-multi-blue relative md:h-full md:aspect-[1650/673] w-full min-h-[390px] md:max-h-[673px] z-0"
      style={{
        backgroundImage: `url(${data?.object?.background})`,
        backgroundPosition: '50% 50%',
      }}
    >
      <div className="grid-wrapper flex flex-wrap items-center justify-center pt-nav-mob md:pt-nav-tab lgxl:pt-nav-desktop h-full relative">
        <div className="text-white text-center max-w-[650px] mx-auto">
          <h1 className="type-beta mb-5 lg:mb-10 font-light">{data?.object?.title} </h1>
          <div className="type-theta font-light">{data?.object?.description}</div>
        </div>
        {data?.object?.button && (
          <div className="flex justify-center md:justify-end mt-4 md:absolute md:bottom-7 lg:bottom-10 md:right-4 lg:right-8">
            <div className="cmpt__cta">
              <div className="display-flex">
                <a className="cta" target="" href={data?.object?.button?.link}>
                  {data?.object?.button?.label}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
