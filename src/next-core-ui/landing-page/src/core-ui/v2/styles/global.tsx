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

export const GlobalStyle = () => {
  return (
    <style global jsx>{`
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
    `}</style>
  );
};
