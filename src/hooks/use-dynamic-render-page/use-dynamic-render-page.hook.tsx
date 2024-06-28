import { useRouter } from 'next/router';
import { IDynamicRenderPageProps } from './use-dynamic-render-page.type';
import { useMemo } from 'react';

export const useDynamicRenderPage = (props: IDynamicRenderPageProps) => {
  const { systemConfig } = props;

  const configSlug = systemConfig?.ldpSystemConfigPage?.systemConfig;

  const router = useRouter();

  const configParentOutput = useMemo(() => {
    return configSlug?.[router?.asPath];
  }, [router?.asPath, configSlug]);

  const configChildrenOutput = useMemo(() => {
    let str = '/';

    if (!router?.query?.slug) return;

    if (router?.query?.slug?.length === 1 && !!configParentOutput) return;

    if (router?.query?.slug?.length > 1) {
      str = router?.query?.slug[0];
    }

    return configSlug?.[str];
  }, [configParentOutput, router?.query?.slug, configSlug]);

  const renderSeoPage = useMemo(() => {
    const seoData = systemConfig?.ldpSystemConfigPage?.seoData?.[router?.asPath];

    return (
      <>
        <meta property="og:title" content={seoData?.ogTitle} />
        <meta property="og:url" content={seoData?.ogUrl} />
        <meta property="og:image" content={seoData?.ogImage} />
        <title>{seoData?.ogTitle}</title>
      </>
    );
  }, [router?.asPath, systemConfig?.ldpSystemConfigPage?.seoData]);

  return {
    configParentOutput,
    configChildrenOutput,
    renderSeoPage,
  };
};
