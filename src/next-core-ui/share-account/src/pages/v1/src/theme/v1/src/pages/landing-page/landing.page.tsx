import { ShareAccountPageV1ThemeV1Props } from './landing-page.type';
import { HomeSliderShareAccountStyles } from './home-slider.styles';
import { useShareAccountPageV1ThemeV1 } from './use-landing-page.page';

export const ShareAccountPageV1ThemeV1: React.FC<ShareAccountPageV1ThemeV1Props> = (props) => {
  const { systemConfig, slugConfigJSON, slugKey } = props;

  const { renderSections, renderMenu, renderFooter } = useShareAccountPageV1ThemeV1({
    systemConfig,
    slugConfigJSON,
    slugKey,
  });

  return (
    <main className="pt-[80px] md:pt-[90px] lg:pt-[120px]">
      <div className="page-content max-w-full w-full">
        {renderMenu}
        {renderSections}
        {renderFooter}
        <HomeSliderShareAccountStyles />
      </div>
    </main>
  );
};
