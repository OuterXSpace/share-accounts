import Script from 'next/script';
import { IIntroductionBallProps } from './introduction-ball.type';
import { IntroductionBallStyle } from './introduction-ball.style';

export const IntroductionBall: React.FC<IIntroductionBallProps> = () => {
  return (
    // always have data-us-project attribute load model from unicorn studio
    <div
      className="absolute w-screen h-full top-0 z-[2] pointer-events-none introduction__ball h-full"
      data-us-project="ywrqp5HH8f3PmuxayhNs?update=aaafff"
    >
      {/* inject script to header load external script model from unicorn studio */}
      <Script
        id="unicorn-studio-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        !function () {
          if (!window.UnicornStudio) {
            window.UnicornStudio = { isInitialized: !1 };
            let script = document.createElement("script");
            script.src = "https://cdn.unicorn.studio/v1.2.0/unicornStudio.umd.js";
            script.onload = function () {
              window.UnicornStudio.isInitialized || (UnicornStudio.init(), window.UnicornStudio.isInitialized = !0);
            };
            document.getElementsByTagName("head")[0].appendChild(script);
          }
        }();
      `,
        }}
      />
      <div className="visible lg:hidden">mobile</div>
      <IntroductionBallStyle />
    </div>
  );
};
