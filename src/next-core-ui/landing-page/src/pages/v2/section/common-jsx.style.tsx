import Link from 'next/link';
import {
  AboutPageStyles,
  ContactPageStyles,
  CrmPageStyles,
  MainPageStyles,
  RootPageStyles,
  ServicesPageStyles,
} from './styles';
import { ClickLoader, CursorPointer } from './animation';

export const CommonJxsStyle: React.FC = () => {
  return (
    <div className="components">
      <div className="css">
        <div className="css-root w-embed">
          <RootPageStyles />
        </div>
        <div className="main-css w-embed">
          <MainPageStyles />
        </div>
        <div className="about-css w-embed">
          <AboutPageStyles />
        </div>
        <div className="services-css w-embed">
          <ServicesPageStyles />
        </div>
        <div className="crm-page-css w-embed">
          <CrmPageStyles />
        </div>
        <div className="contact-css w-embed">
          <ContactPageStyles />
        </div>
      </div>
      <div id="hideheader" className="nav">
        <div data-w-id="c930a0fd-20aa-bb8b-cce2-ecaf1bbea198" className="menu-overlay" />
        <div className="logo">
          <Link id="pt-link" href="/" aria-current="page" className="w-inline-block w--current">
            <img
              src="https://assets-global.website-files.com/6618e637b1708fa9ebdf54ae/662a07142a921dccb20fb20f_NEW-LOT-LOGO.svg"
              loading="lazy"
              alt=""
            />
          </Link>
        </div>
        <div id="mega-burger" className="burger">
          <div data-w-id="c930a0fd-20aa-bb8b-cce2-ecaf1bbea19d" className="menu-trigger" />
          <div className="menu-button">
            <div data-w-id="c930a0fd-20aa-bb8b-cce2-ecaf1bbea19f">
              MENU
              <br />
              close
              <br />
              menu
            </div>
          </div>
        </div>
        <div className="menu menu-hide">
          <Link href="/" id="menu-link" aria-current="page" className="link w--current">
            home
          </Link>
          <Link href="/about" id="menu-link" className="link">
            about
          </Link>
          <Link href="/services" id="menu-link" className="link">
            services
          </Link>
          <Link href="/crm" id="menu-link" className="link">
            crm
          </Link>
          <Link href="/contact" className="nav-cta">
            <span>GET PROPOSAL</span>
          </Link>
        </div>
      </div>
      <CursorPointer />
    </div>
  );
};
