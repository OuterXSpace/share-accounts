import { ContactV2, ServicesSlider } from '.';
import { NotFound } from '../../../../../../../../../../components';
import { IUiConfigServerSide } from '../../../../../../../../../../models';
import { Introduction } from './introduction';
import {
  LandingPageTestAbout,
  LandingPageTestContact,
  LandingPageTestCrm,
  LandingPageTestHome,
  LandingPageTestService,
} from './page-test';

export interface IExportSectionShareAccountV1ThemeV1Props {
  systemConfig?: IUiConfigServerSide;
  data?: Record<string, any>;
  className?: string;
  section?: string;
  // section?:
  //   | 'INTRODUCTION_SECTION'
}

export const ExportSectionLandingPageV2ThemeV1: React.FC<IExportSectionShareAccountV1ThemeV1Props> = (props) => {
  const { systemConfig, section, data, className } = props;

  switch (section) {
    case 'INTRODUCTION_SECTION':
      return <Introduction data={data} className={className} />;
    case 'SERVICES_SLIDER_SECTION':
      return <ServicesSlider data={data} className={className} />;
    case 'CONTACT_SECTION':
      return <ContactV2 data={data} className={className} />;
    case 'TEST_HOME':
      return <LandingPageTestHome />;
    case 'TEST_CONTACT':
      return <LandingPageTestContact />;
    case 'TEST_CRM':
      return <LandingPageTestCrm />;
    case 'TEST_SERVICE':
      return <LandingPageTestService />;
    case 'TEST_ABOUT':
      return <LandingPageTestAbout />;
    default:
      return <NotFound />;
  }
};
