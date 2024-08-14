import { PerspectivesArticleHero } from '../perspectives-article-hero';
import { RichTextSection } from '../rich-text';
import { IStaticPageShareAccountTheme01Props } from './static.type';

export const StaticPageSection: React.FC<IStaticPageShareAccountTheme01Props> = (props) => {
  const { data, className } = props;

  return (
    <div className={`${className} static-page`}>
      <PerspectivesArticleHero
        data={{
          object: {
            title: data?.object?.title,
          },
        }}
      />
      <RichTextSection
        data={{
          object: {
            content: data?.object?.content,
          },
        }}
      />
    </div>
  );
};
