/* eslint-disable react/no-danger */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ILandingPageMenuDesktopV1Props } from './menu-desktop.type';
import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useRouter } from 'next/router';
import { mainDomainReplace } from '../../../../../../../../../../../utils';

export const LandingPageMenuDesktopV1: React.FC<ILandingPageMenuDesktopV1Props> = (props) => {
  const { data, className, slugKey } = props;

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (offset === 0) {
    return <MenuDesktopV1 data={data} className={className} slugKey={slugKey} />;
  }
  return <MenuDesktopV2 data={data} className={className} />;
};

export const MenuDesktopV1: React.FC<ILandingPageMenuDesktopV1Props> = (props) => {
  const { data, className } = props;

  return (
    <header className="header" data-js-hook="header">
      <div className="header-main">
        <div className="container">
          <div className="grid-x show-for-xlarge top-bar">
            <div className="cell small-12 xlarge-6 xlarge-offset-6">
              <nav className="header-nav-top">
                <ul className="flex-container flex-dir-row align-right align-middle">
                  {data?.object?.desktop?.menuHeader?.map((item) => {
                    const { id, label, link } = item;

                    return (
                      <Link key={id} href={link} className="font-normal">
                        {label}
                      </Link>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
          <div className="title-bar" data-js-hook="title-bar">
            <div className="title-bar-left flex-container align-middle">
              <div className="header-logo">
                <Link href="/">
                  {/* <span className="header-logo-img-default" aria-label="West Monroe Logo"> */}
                  <LazyLoadImage
                    src={data?.object?.logo?.logoDark}
                    className="custom-logo astra-logo-img h-[33px]"
                    alt="Logo"
                    effect="blur"
                  />
                  {/* </span> */}
                </Link>
              </div>
            </div>
            <div className="title-bar-right flex-container align-middle">
              <nav className="header-nav-main-wrapper show-for-xlarge">
                <ul className="header-nav-main flex-container align-right align-bottom">
                  {data?.object?.desktop?.array?.map((item) => {
                    const { id, label, link } = item;

                    return (
                      <li key={id}>
                        <Link className="what-we-do" href={link}>
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
                                    <Link className="cybersecurity" href="/services/data-and-technology/cybersecurity">
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
                                    <Link className="cybersecurity" href="/services/data-and-technology/cybersecurity">
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export const MenuDesktopV2: React.FC<ILandingPageMenuDesktopV1Props> = (props) => {
  const { data, className } = props;

  const [isToggleMenu, setIsToggleMenu] = useState(false);

  return (
    <header className="header header-fixed" data-js-hook="header">
      <div className="header-main">
        <div className="container ">
          <div className="title-bar" data-js-hook="title-bar">
            <div className="title-bar-left flex-container align-middle">
              <div className="header-logo">
                <Link href="/">
                  <span className="header-logo-img-navy" aria-label="West Monroe Logo">
                    <LazyLoadImage
                      src={data?.object?.logo?.logoDark}
                      className="custom-logo astra-logo-svg h-[33px]"
                      alt="Logo"
                      effect="blur"
                    />
                  </span>
                </Link>
              </div>
              <div className="header-current-page">Offices</div>
            </div>
            <div className="title-bar-right flex-container align-middle">
              <div className="header-nav-cta">
                <Link className="cta cta-type" target="" href="">
                  Contact Us
                </Link>
              </div>
              <button onClick={() => setIsToggleMenu(true)} className="menu-icon" type="button">
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <MenuDesktopV3 isToggleMenu={isToggleMenu} closeToggle={() => setIsToggleMenu(false)} />

      <div
        className={`${
          isToggleMenu
            ? 'js-off-canvas-overlay is-overlay-fixed is-visible is-closable'
            : 'js-off-canvas-overlay is-overlay-fixed'
        }`}
      />
    </header>
  );
};

const PopupLink: React.FC<Linkny> = (props) => {
  const { link, children, className, disabled, routeLink, callBack, ...restAnchorProps } = props;

  const router = useRouter();

  const handleOpenLink = useCallback(
    (ev) => {
      ev.preventDefault();
      ev.stopPropagation();

      if (disabled) return;

      let url = routeLink ?? link;

      if (!url) return;

      url = mainDomainReplace(url);

      if (routeLink) router.push(url);
      else {
        callBack?.();
      }
    },
    [callBack, disabled, link, routeLink, router],
  );

  return (
    <Link
      onClick={handleOpenLink}
      className={`toto-popup-link ${className} ${
        disabled ? 'disabled cursor-not-allowed filter grayscale-100 opacity-70' : ''
      }`}
      {...restAnchorProps}
    >
      {children}
    </Link>
  );
};

export const MenuDesktopV3: React.FC<Linkny> = (props) => {
  const { data, className, isToggleMenu, closeToggle } = props;

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
            <form action="/search" className="main-search-form" __bizdiag={107944136} __biza="WJ__">
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
        <ul className="nav-secondary menu vertical flex-child-grow" data-js-hook="nav-secondary">
          <li>
            <Link href="/news">News &amp; Events</Link>
          </li>
          <li>
            <Link href="/offices">Offices</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="nav-social menu" data-js-hook="nav-social">
          <li>
            <Link href="https://www.linkedin.com/company/westmonroe/" aria-label="LinkedIn" target="_blank">
              <span className="text">LinkedIn</span>
              <span className="icon">
                {/* ?xml version="1.0" encoding="utf-8"? */}
                <svg
                  width="17px"
                  height="17px"
                  viewBox="0 0 17 17"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc>Created with Lunacy</desc>
                  <path
                    d="M1.937 3.874C3.007 3.874 3.874 3.007 3.874 1.937C3.874 0.867 3.007 0 1.937 0C0.867 0 0 0.867 0 1.937C0 3.007 0.867 3.874 1.937 3.874ZM16.9009 9.9011L16.9009 15.8751C16.9009 16.0221 16.7809 16.1421 16.6339 16.1421L13.5499 16.1421C13.4019 16.1421 13.2819 16.0221 13.2819 15.8751L13.2819 10.3191C13.2819 8.85711 12.7599 7.85811 11.4499 7.85811C10.4499 7.85811 9.85688 8.53111 9.59388 9.18211C9.49888 9.41411 9.47388 9.73711 9.47388 10.0631L9.47388 15.8741C9.47388 16.0221 9.35488 16.1421 9.20688 16.1421L6.12388 16.1421C5.97588 16.1421 5.85588 16.0231 5.85688 15.8741C5.8572 15.7951 5.85759 15.6998 5.85805 15.5899C5.86611 13.6435 5.89312 7.12596 5.86188 5.52911C5.85988 5.37911 5.98088 5.25811 6.12988 5.25811L9.20688 5.25811C9.35488 5.25811 9.47488 5.37811 9.47488 5.5261L9.47488 6.80111C9.46688 6.81311 9.45688 6.82511 9.44988 6.83611L9.47488 6.83611L9.47488 6.80111C9.95488 6.06111 10.8129 5.00311 12.7349 5.00311C15.1159 5.00311 16.9009 6.55911 16.9009 9.9011ZM3.5869 16.1421L0.503901 16.1421C0.356901 16.1421 0.235901 16.0221 0.235901 15.8751L0.235901 5.5261C0.235901 5.3781 0.356901 5.2581 0.503901 5.2581L3.5869 5.2581C3.7339 5.2581 3.8549 5.3781 3.8549 5.5261L3.8549 15.8751C3.8549 16.0221 3.7339 16.1421 3.5869 16.1421Z"
                    id="Fill-4"
                    fillRule="evenodd"
                    stroke="none"
                  />
                </svg>
              </span>
            </Link>
          </li>
          <li>
            <Link href="http://www.twitter.com/westmonroe" aria-label="Twitter" target="_blank">
              <span className="text">Twitter</span>
              <span className="icon">
                <svg width={17} height={18} viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg">
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                </svg>
              </span>
            </Link>
          </li>
          <li>
            <Link href="http://www.facebook.com/westmonroe" aria-label="Facebook" target="_blank">
              <span className="text">Facebook</span>
              <span className="icon">
                {/* ?xml version="1.0" encoding="utf-8"? */}
                <svg
                  width="9px"
                  height="20px"
                  viewBox="0 0 9 20"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc>Created with Lunacy</desc>
                  <path
                    d="M1.963 9.666L1.963 18.939C1.963 19.073 2.071 19.181 2.204 19.181L5.649 19.181C5.781 19.181 5.89 19.073 5.89 18.939L5.89 9.515L8.387 9.515C8.512 9.515 8.616 9.419 8.627 9.294L8.867 6.454C8.879 6.313 8.768 6.192 8.626 6.192L5.89 6.192L5.89 4.178C5.89 3.706 6.273 3.323 6.744 3.323L8.669 3.323C8.802 3.323 8.91 3.215 8.91 3.081L8.91 0.242C8.91 0.108 8.802 0 8.669 0L5.418 0C3.51 0 1.963 1.547 1.963 3.455L1.963 6.192L0.241 6.192C0.108 6.192 0 6.3 0 6.434L0 9.273C0 9.407 0.108 9.515 0.241 9.515L1.963 9.515L1.963 9.666Z"
                    id="Fill-4"
                    stroke="none"
                  />
                </svg>
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/wearewestmonroe" aria-label="Instagram" target="_blank">
              <span className="text">Instagram</span>
              <span className="icon">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Instagram icon</title>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </span>
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/user/wmpgowest" aria-label="Youtube" target="_blank">
              <span className="text">Youtube</span>
              <span className="icon">
                <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>YouTube icon</title>
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.glassdoor.com/Overview/Working-at-West-Monroe-Partners-EI_IE118343.11,31.htm"
              aria-label="Glassdoor"
              target="_blank"
            >
              <span className="text">Glassdoor</span>
              <span className="icon">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Glassdoor icon</title>
                  <path d="M17.144 20.572H3.43C3.43 22.465 4.963 24 6.856 24h10.286c1.893 0 3.428-1.535 3.428-3.428V6.492c0-.07-.054-.125-.124-.125h-3.18c-.067 0-.123.056-.123.126v14.08zm0-20.572c1.892 0 3.427 1.535 3.427 3.43H6.858v14.078c0 .068-.056.125-.125.125H3.554c-.07 0-.125-.057-.125-.125V3.428C3.43 1.536 4.963 0 6.856 0h10.287" />
                </svg>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
