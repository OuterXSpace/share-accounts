import Head from 'next/head';
import { useLandingPageV1 } from './use-landing-page.page';
import { LandingPageV1ThemeV1Props } from './landing-page.type';

export const LandingPageV1ThemeV1: React.FC<LandingPageV1ThemeV1Props> = (props) => {
  const { systemConfig, slugConfigJSON, slugKey } = props;

  const { renderSections, renderMenu, renderFooter } = useLandingPageV1({
    systemConfig,
    slugConfigJSON,
    slugKey,
    version: 'V1',
  });

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/dm-sans" />
      </Head>
      {renderMenu}
      {renderSections}
      {renderFooter}
    </>
  );
};
