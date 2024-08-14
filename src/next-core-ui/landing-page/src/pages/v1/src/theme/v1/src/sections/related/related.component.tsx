import { useMemo } from 'react';
import { IRelatedSectionProps } from './related.type';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const RelatedSection: React.FC<IRelatedSectionProps> = (props) => {
  const { data, className, systemConfig, slugKey } = props;

  const router = useRouter();

  const relatedData = useMemo(() => {
    const arrayData = systemConfig?.ldpSystemConfigPage?.[data?.object?.loadDataResourceKey]?.list ?? [];

    const detailData = arrayData?.filter((item) => {
      return (
        `${item?.id}` !== `${router?.query?.id ?? slugKey?.replace('/', '')}` &&
        `${item?.categoryId}` === `${data?.object?.categoryId}`
      );
    });

    return detailData;
  }, [data, router?.query?.id, slugKey, systemConfig?.ldpSystemConfigPage]);

  return (
    <div className={`${className} cmpt__related-stories  background-white`}>
      <div className="container">
        <h2 className="related-stories-heading headline2 text-downriver">{data?.object?.title}</h2>
        <div className="related-stories">
          <div className="grid-x grid-margin-x align-center">
            {relatedData?.map((related) => {
              const { id, link, title, imgUrl, information } = related;

              return (
                <div key={id} className="cell medium-4 related-stories-cell">
                  <div className="related-story background-athens-gray ">
                    <Link href={link} target="">
                      <div className="story-image">
                        <img src={imgUrl} alt={title} />
                      </div>
                      <div className="story-info">
                        <div className="story-eyebrow-wrapper">
                          <span className="eyebrow text-tangaroa">{information}</span>
                        </div>
                        <p className="body2">{title}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
