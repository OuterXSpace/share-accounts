import Script from 'next/script';
import { IIntroductionBallProps } from './introduction-ball.type';
import { IntroductionBallStyle } from './introduction-ball.style';

export const IntroductionBall: React.FC<IIntroductionBallProps> = () => {
  return (
    <>
      {/* // always have data-us-project attribute load model from unicorn studio */}
      <div className="hidden lg:block">
        <div
          className="absolute w-screen h-full top-0 z-[2] pointer-events-none introduction__ball"
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
        </div>
      </div>
      <div className="block lg:hidden">
        {' '}
        <div
          data-poster-url="https://assets-global.website-files.com/6618e637b1708fa9ebdf54ae/662caefe84c7f360e02118e9_lot-blob-new-poster-00001.jpg"
          data-video-urls="https://assets-global.website-files.com/6618e637b1708fa9ebdf54ae/662caefe84c7f360e02118e9_lot-blob-new-transcode.mp4,https://assets-global.website-files.com/6618e637b1708fa9ebdf54ae/662caefe84c7f360e02118e9_lot-blob-new-transcode.webm"
          data-autoplay="true"
          data-loop="true"
          data-wf-ignore="true"
        >
          <video
            id="6c04e461-19b9-ba5b-c9b1-dcc1d31abb44-video"
            autoPlay
            loop
            muted
            playsInline
            data-wf-ignore="true"
            data-object-fit="cover"
            style={{
              backgroundImage:
                'url("https://assets-global.website-files.com/6618e637b1708fa9ebdf54ae/662caefe84c7f360e02118e9_lot-blob-new-poster-00001.jpg")',
            }}
            className="flex min-w-[80vw] max-w-[80vw] h-[80vw] md:min-w-[65vw] md:max-w-[65vw] md:h-[65vw] overflow-hidden object-cover z-[-100] bg-center bg-cover m-auto absolute top-[-100%] md:top-[-120%] bottom-[-100%] left-[-100%] right-[-100%]"
          >
            <source
              src="https://assets-global.website-files.com/6618e637b1708fa9ebdf54ae/662caefe84c7f360e02118e9_lot-blob-new-transcode.mp4"
              data-wf-ignore="true"
            />
            <source
              src="https://assets-global.website-files.com/6618e637b1708fa9ebdf54ae/662caefe84c7f360e02118e9_lot-blob-new-transcode.webm"
              data-wf-ignore="true"
            />
          </video>
        </div>
      </div>
      <IntroductionBallStyle />
    </>
  );
};
