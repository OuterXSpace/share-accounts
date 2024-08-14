import { IPerspectivesArticleHeroProps } from './perspectives-article-hero.type';

export const PerspectivesArticleHero: React.FC<IPerspectivesArticleHeroProps> = (props) => {
  const { data, className } = props;

  return (
    <header className="cmpt__perspectives-article-hero cmpt__perspectives-article-hero-no-image bg-white cmpt__hero_minimal">
      <div className="grid-wrapper-sm z-10 relative">
        <div className="grid grid-cols-12">
          <div className="col-span-full lg:col-span-7 lg:col-start-3 print:col-span-full flex items-center pt-20 pb-8 md:pt-24">
            <h1 className="type-delta leading-tight mb-5 font-light text-downriver">{data?.object?.title}</h1>
          </div>
        </div>
      </div>
    </header>
  );
};
