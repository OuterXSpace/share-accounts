import React, { useMemo, useState } from 'react';
import { ILandingPageMenuDesktopV1Props } from './menu-desktop.type';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useMenu } from './hooks';
import Link from 'next/link';
import InlineSVG from 'svg-inline-react';

export const LandingPageMenuDesktopV1: React.FC<ILandingPageMenuDesktopV1Props> = (props) => {
  const { data, propsParent } = props;

  const { systemConfig } = propsParent;

  const [isToggleMenu, setIsToggleMenu] = useState(false);

  const { headerRef, isHeaderFixed } = useMenu(propsParent);

  return (
    <header ref={headerRef} className="header">
      <div className="header-main">
        <div className="container">
          {!isHeaderFixed && (
            <div className="grid-x show-for-xlarge top-bar">
              <div className="cell small-12 xlarge-6 xlarge-offset-6">
                <nav className="header-nav-top">
                  <ul className="flex-container flex-dir-row align-right align-middle">
                    {data?.object?.desktop?.menuHeader?.map((item) => {
                      const { id = '', label = '', link = '' } = item;

                      return (
                        <Link key={id} href={link ?? ''} className="font-normal">
                          {label}
                        </Link>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          )}
          <div className="title-bar" data-js-hook="title-bar">
            <div className="title-bar-left flex-container align-middle">
              <div className="header-logo">
                <Link href="/">
                  <LazyLoadImage
                    src={data?.object?.logo?.logoDark}
                    className="custom-logo astra-logo-img h-[33px]"
                    alt="Logo"
                    effect="blur"
                  />
                </Link>
              </div>
            </div>
            <div className="title-bar-right flex-container align-middle">
              {isHeaderFixed ? (
                <div className="title-bar-right flex-container align-middle">
                  <div className="header-nav-cta">
                    <Link className="cta cta-type" href={data?.object?.desktop?.button?.link ?? ''}>
                      {data?.object?.desktop?.button?.label}
                    </Link>
                  </div>
                  <button onClick={() => setIsToggleMenu(true)} className="menu-icon" type="button">
                    Menu
                  </button>
                </div>
              ) : (
                <nav className="header-nav-main-wrapper show-for-xlarge">
                  <ul className="header-nav-main flex-container align-right align-bottom">
                    {data?.object?.desktop?.array?.map((item) => {
                      const { id, label = '', link = '' } = item;

                      return (
                        <li key={id}>
                          <Link className="what-we-do" href={link ?? ''}>
                            {label}
                          </Link>
                          <div className="header-nav-main-dropdown flex-container text-left background-black-pearl ">
                            <div className="header-nav-main-dropdown-column header-nav-main-dropdown-column-0">
                              <ul className="menu vertical">
                                <li>
                                  <Link className="strategic-visioning" href="/services">
                                    Strategic Visioning
                                  </Link>
                                </li>
                                <li>
                                  <Link className="data-amp-technology" href="/services/data-and-technology">
                                    Data &amp; Technology
                                  </Link>
                                  <ul className="menu vertical nested">
                                    <li>
                                      <Link className="cloud" href="/services/data-and-technology/cloud">
                                        Cloud
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="cybersecurity"
                                        href="/services/data-and-technology/cybersecurity"
                                      >
                                        Cybersecurity
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="data-analytics-amp-ai"
                                        href="/services/data-and-technology/data-analytics-artificial-intelligence"
                                      >
                                        Data Analytics &amp; AI
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="it-strategy-amp-architecture"
                                        href="/services/data-and-technology/it-strategy-consulting"
                                      >
                                        IT Strategy &amp; Architecture
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>

                            <div className="header-nav-main-dropdown-column header-nav-main-dropdown-column-0">
                              <ul className="menu vertical">
                                <li>
                                  <Link className="data-amp-technology" href="/services/data-and-technology">
                                    Data &amp; Technology
                                  </Link>
                                  <ul className="menu vertical nested">
                                    <li>
                                      <Link className="cloud" href="/services/data-and-technology/cloud">
                                        Cloud
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="cybersecurity"
                                        href="/services/data-and-technology/cybersecurity"
                                      >
                                        Cybersecurity
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="data-analytics-amp-ai"
                                        href="/services/data-and-technology/data-analytics-artificial-intelligence"
                                      >
                                        Data Analytics &amp; AI
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="it-strategy-amp-architecture"
                                        href="/services/data-and-technology/it-strategy-consulting"
                                      >
                                        IT Strategy &amp; Architecture
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            <div className="header-nav-main-dropdown-column header-nav-main-dropdown-column-0">
                              <ul className="menu vertical">
                                <li>
                                  <Link className="business-operations" href="/services/business-operations">
                                    Business Operations
                                  </Link>
                                  <ul className="menu vertical nested">
                                    <li>
                                      <Link
                                        className="automation-amp-productivity"
                                        href="/services/business-operations/automation-productivity"
                                      >
                                        Automation &amp; Productivity
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="cost-reduction"
                                        href="/services/business-operations/cost-reduction"
                                      >
                                        Cost Reduction
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="operations" href="/services/business-operations/operations">
                                        Operations
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="outsourcing-advisory"
                                        href="/services/business-operations/outsourcing-advisory"
                                      >
                                        Outsourcing Advisory
                                      </Link>
                                    </li>
                                    <li>
                                      <Link className="supply-chain" href="/services/business-operations/supply-chain">
                                        Supply Chain
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToggleMenu
        data={data}
        systemConfig={systemConfig}
        isToggleMenu={isToggleMenu}
        closeToggle={() => setIsToggleMenu(false)}
      />
      <div
        onClick={() => setIsToggleMenu(false)}
        className={`${
          isToggleMenu
            ? 'js-off-canvas-overlay is-overlay-fixed is-visible is-closable'
            : 'js-off-canvas-overlay is-overlay-fixed'
        }`}
      />
    </header>
  );
};

export const ToggleMenu: React.FC<any> = (props) => {
  const { data, isToggleMenu, closeToggle, systemConfig } = props;

  const [isOpenChildMenu, setIsOpenChildMenu] = useState(false);

  const renderMenuChild = useMemo(() => {
    return (
      <li className="is-drilldown-submenu-parent" aria-label="What We Do">
        <Link
          href=""
          onClick={(ev) => {
            ev.preventDefault();
            setIsOpenChildMenu(true);
          }}
          className="what-we-do"
        >
          What We Do
        </Link>
        <ul
          className={`${
            isOpenChildMenu ? 'is-active' : 'invisible'
          } menu vertical nested submenu is-drilldown-submenu `}
        >
          <li className="js-drilldown-back">
            <Link
              href=""
              onClick={(ev) => {
                ev.preventDefault();
                setIsOpenChildMenu(false);
              }}
            >
              Main Menu
            </Link>
          </li>
          <li
            data-indent-depth={0}
            className="is-drilldown-submenu-parent is-submenu-item is-drilldown-submenu-item"
            aria-label="Business Operations"
          >
            <Link href="" className="business-operations" tabIndex={0}>
              Business Operations
            </Link>
          </li>
        </ul>
      </li>
    );
  }, [isOpenChildMenu]);

  return (
    <div
      id="off-canvas-main-menu"
      className={`off-canvas position-right is-transition-overlap ${isToggleMenu ? 'is-open' : 'is-close'}`}
    >
      <button onClick={closeToggle} className="off-canvas-close close-button" aria-label="Close menu" type="button">
        <span aria-hidden="true">×</span>
      </button>
      <div className="off-canvas-content text-white flex-container flex-dir-column" data-off-canvas-content="">
        <div className="main-search">
          <div className="main-search-toggle">
            <Link href="" data-js-hook="main-search-open-toggle">
              <svg
                viewBox="0 0 16 18"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <path d="M0 0L12 0L12 12.3809L0 12.3809L0 0Z" transform="translate(0 0.4909047)" />
                  <clipPath>
                    <use xlinkHref="#path_1" />
                  </clipPath>
                </defs>
                <g transform="translate(1 1)">
                  <g>
                    <path
                      d="M0 0L12 0L12 12.3809L0 12.3809L0 0Z"
                      transform="translate(0 0.4909047)"
                      fill="none"
                      stroke="none"
                    />
                    <g clipPath="url(#mask_1)">
                      <path
                        d="M0 6.19048C0 2.77148 2.6862 0 6 0C9.3138 0 12 2.77148 12 6.19048C12 9.60948 9.3138 12.381 6 12.381C2.6862 12.381 0 9.60948 0 6.19048ZM10.8 6.19048C10.8 3.45986 8.6466 1.2381 6 1.2381C3.3534 1.2381 1.2 3.45986 1.2 6.19048C1.2 8.9211 3.3534 11.1429 6 11.1429C8.6466 11.1429 10.8 8.9211 10.8 6.19048Z"
                        transform="translate(0 0.4908428)"
                        fill="#FDB415"
                        fillRule="evenodd"
                        stroke="none"
                      />
                    </g>
                  </g>
                  <path d="M0 0L4 4" transform="translate(10 12)" fill="none" stroke="#FDB415" strokeWidth={2} />
                </g>
              </svg>
            </Link>
          </div>
          <div className="main-search-content" data-js-hook="main-search-content">
            <form action="/search" className="main-search-form">
              <input type="text" name="query" placeholder="Type to search..." />
              <button
                className="main-search-close-toggle close-button close-button-transparent"
                aria-label="Close search"
                type="button"
                data-js-hook="main-search-close-toggle"
              >
                <span aria-hidden="true">×</span>
              </button>
            </form>
          </div>
        </div>
        <div className="is-drilldown animate-height" style={{ height: 513, maxWidth: 279 }}>
          <ul className="nav-main nav-main-drilldown menu vertical drilldown">{renderMenuChild}</ul>
        </div>
        <ul className="nav-secondary menu vertical flex-child-grow">
          {data?.object?.desktop?.menuHeader?.map((item) => {
            const { id, label, link = '' } = item;

            return (
              <li key={id}>
                <Link href={link ?? ''} className="">
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="nav-social menu">
          {systemConfig?.ldpSystemConfigPage?.dataList?.social?.array?.map((item) => {
            const { id, link = '', svgIcon = '', title } = item;
            return (
              <li key={id}>
                <Link key={id} href={link ?? ''}>
                  <span className="text">{title}</span>
                  <span className="icon">{svgIcon && <InlineSVG src={svgIcon} />}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
