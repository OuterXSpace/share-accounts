import { useRouter } from 'next/router';
import { IDynamicRenderPageProps } from './use-dynamic-render-page.type';
import { useMemo } from 'react';
import { findTheme } from './use-dyanmic-render-page.until';

export const useDynamicRenderPage = (props: IDynamicRenderPageProps) => {
  const { systemConfig } = props;

  const configJSON = systemConfig?.ldpSystemConfigPage?.systemConfig;

  const router = useRouter();

  const slugConfigJSON = useMemo(() => {
    return findTheme(configJSON, router?.asPath);
  }, [configJSON, router?.asPath]);

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
    slugConfigJSON,
    renderSeoPage,
  };
};
