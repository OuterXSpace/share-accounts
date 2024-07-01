import { useLandingPageV4 } from '../../../../../pages';
import { LandingPageV4ThemeV1Props } from './landing-page.type';

export const LandingPageV4ThemeV1: React.FC<LandingPageV4ThemeV1Props> = (props) => {
  const { systemConfig, slugConfigJSON, slugKey } = props;

  const { renderSections, renderMenu, renderFooter } = useLandingPageV4({
    systemConfig,
    slugConfigJSON,
    slugKey,
    version: 'V1',
  });

  return (
    <main className="bg-[#ffffff]">
      <div className="container wrap p-lg-0 pt-0 lg:pt-2">
        <div className="content pt-2">
          <main className="main">
            <div className="page-content max-w-full w-full">
              {renderMenu}
              {renderSections}
              {renderFooter}
            </div>
          </main>
        </div>
      </div>
    </main>
  );
};
