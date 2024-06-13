// :root {
//   --black: #050512;
//   --beige: #FFFBFB;
//   --grey: #808080;
//   --red: #A2254B;
//   --soft-red: #D4BDC4;
//   --red-brown: #938388;
//   --mid-brown: #4C3E43;
// }

// body::before {
//   content: '';
//   width: 100%;
//   height: 0%;
//   background: linear-gradient(66deg, rgba(169, 45, 76, 1) 24%, rgba(95, 42, 87, 1) 100%);
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   transition: all 0.8s cubic-bezier(0.89, 0.14, 0, 0.99);
//   z-index: 99999999;
// }

// body::after {
//   content: '';
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(66deg, rgba(169, 45, 76, 1) 24%, rgba(95, 42, 87, 1) 100%);
//   position: fixed;
//   top: 0;
//   left: 0;
//   transition: all 0.8s cubic-bezier(0.89, 0.14, 0, 0.99);
//   z-index: 99999999;
// }

export const LandingPageStylesV2: React.FC = () => {
  return (
    <style global jsx>{`
      @import url('https://fonts.cdnfonts.com/css/dm-sans');

      * {
        -webkit-tap-highlight-color: transparent;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }

      ::selection {
        background: #ae2c4b;
        color: #ffffff;
      }

      canvas {
        background-color: transparent;
        pointer-events: none !important;
      }

      html {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        font-family: sans-serif;
      }

      body {
        margin: 0;
      }

      h1,
      h2,
      h3,
      h4,
      a {
        font-family: 'PPMonumentExtended-Medium';
        text-transform: uppercase;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        padding: 0;
        margin: 0;
        font-weight: unset;
      }

      body {
        padding: 0;
        margin: 0;
        background: #050512;
        color: #fffbfb;
        font-size: 1vw;
        line-height: 1.3;
        overflow: -moz-scrollbars-none;
        -ms-overflow-style: none;
        font-family: 'DM Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        letter-spacing: -0.01vw;
        scrollbar-width: none;
        cursor: default;
      }

      ::-webkit-scrollbar {
        display: none;
      }

      .body-loaded {
        opacity: 1;
      }

      .body-loaded::after {
        height: 0%;
      }

      .body-loader::before {
        height: 100%;
      }

      @font-face {
        font-family: 'PPMonumentExtended-Medium';
        src: url('https://uploads-ssl.webflow.com/6618e637b1708fa9ebdf54ae/6618f78281f3fd598ccd5fe2_PPMonumentExtended-Medium.woff2')
            format('woff2'),
          url('https://uploads-ssl.webflow.com/6618e637b1708fa9ebdf54ae/6618f7825007c8a992614bad_PPMonumentExtended-Medium.woff')
            format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }
    `}</style>
  );
};
