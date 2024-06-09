import { ILandingPageMenuMobileV2Props } from './menu-mobile.type';

export const LandingPageMenuMobileV2: React.FC<ILandingPageMenuMobileV2Props> = (props) => {
  const { data, className } = props;

  return (
    <nav
      className={`grid grid-cols-12 gap-4 mx-[5.5vw] top-[5vw] justify-end items-center bg-transparent z-3 transition-all ease-in-out duration-300 top-[5.5vw] fixed relative ${className}`}
    >
      <div className="fixed top-0 left-0 w-full h-screen bg-opacity-30 bg-gray-900 hidden" />
      <div className="col-span-1">
        <a id="pt-link" href="/" aria-current="page" className="w-inline-block w--current">
          <img
            src="https://assets-global.website-files.com/6618e637b1708fa9ebdf54ae/662a07142a921dccb20fb20f_NEW-LOT-LOGO.svg"
            loading="lazy"
            alt="logo"
            className="min-w-[18vw] max-w-[18vw]"
          />
        </a>
      </div>
      <div className="fixed flex right-[5vw] mix-blend-difference">
        <div className="w-[30vw] h-[18vw] fixed top-0 right-0 z-50" />
        <div className="text-right text-[3.6vw] tracking-[0.5vw] h-[5vw] flex flex-col overflow-hidden">
          {/* <div>
              MENU
              <br />
              close
              <br />
              menu
            </div> */}
          menu
        </div>
      </div>
      <div className="col-span-8 col-start-4 text-6xl flex-row translate-x-full translate-y-full bg-white fixed flex flex-col justify-start items-start gap-5vw p-8vw pr-0 pt-10vw rounded-br-5vw bottom-0 right-0 text-black menu-hide">
        <a href="/" aria-current="page" className="link w--current">
          home
        </a>
        <a href="./about.html" className="link">
          about
        </a>
        <a href="./services.html" className="link">
          services
        </a>
        <a href="./crm.html" className="link">
          crm
        </a>
        <a
          href="./contact.html"
          className="p-[1vw] px-[1.5vw] rounded-[0.3vw] transition-[background] duration-500 ease"
          style={{
            background: 'linear-gradient(66deg, rgba(169, 45, 76, 1) 24%, rgba(95, 42, 87, 1) 100%)',
            backgroundSize: '100% 100%',
          }}
        >
          <span>GET PROPOSAL</span>
        </a>
      </div>
    </nav>
  );
};
