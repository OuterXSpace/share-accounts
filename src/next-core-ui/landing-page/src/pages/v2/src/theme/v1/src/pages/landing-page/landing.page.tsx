import Head from 'next/head';
import { useLandingPageV2 } from '../../../../../pages';
import { ServicesSliderStylesV2 } from '../../sections';
import { LandingPageV4ThemeV1Props } from './landing-page.type';
import { LandingPageStylesV2 } from './landing-page-v2.styles';

export const LandingPageV2ThemeV1: React.FC<LandingPageV4ThemeV1Props> = (props) => {
  const { systemConfig, slugConfigJSON, slugKey } = props;

  const { renderSections, renderMenu, renderFooter } = useLandingPageV2({
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
      <LandingPageStylesV2 />
      <ServicesSliderStylesV2 />
      {renderMenu}
      {renderSections}
      {renderFooter}
    </>
  );
};
