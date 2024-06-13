export const RootPageStyles: React.FC = () => {
  return (
    <style global jsx>{`
      @import url('https://fonts.cdnfonts.com/css/dm-sans');

      :root {
        --black: #050512;
        --beige: #fffbfb;
        --grey: #808080;
        --red: #a2254b;
        --soft-red: #d4bdc4;
        --red-brown: #938388;
        --mid-brown: #4c3e43;
      }
      html.lenis {
        height: auto;
      }
      .lenis.lenis-smooth {
        scroll-behavior: auto !important;
      }
      .lenis.lenis-smooth[data-lenis-prevent] {
        overscroll-behavior: contain;
      }
      .lenis.lenis-stopped {
        overflow: hidden;
      }
      .lenis.lenis-scrolling iframe {
        pointer-events: none;
      }
      html,
      body {
        overflow-x: hidden;
      }
      body {
        padding: 0;
        margin: 0;
        background: var(--black);
        color: var(--beige);
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
      img {
        user-select: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        max-width: 100%;
        object-fit: cover;
      }
      h1,
      h2,
      h3,
      .menu,
      .numbers-highlights h4,
      .menu-button,
      .label-text,
      .submit {
        font-family: 'PPMonumentExtended-Medium';
        text-transform: uppercase;
      }
      a {
        color: unset;
        text-decoration: unset;
      }
      * {
        -webkit-tap-highlight-color: transparent;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      ::selection {
        background: #ae2c4b;
        color: #ffffff;
      }
      ::-webkit-scrollbar {
        display: none;
      }
      canvas {
        background-color: transparent;
        pointer-events: none !important;
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
      h1 {
        font-size: 7.5em;
        line-height: 0.83;
        font-weight: 400;
        letter-spacing: -0.5vw;
      }
      h2 {
        font-size: 3.5em;
        line-height: 1.1;
        font-weight: 400;
        letter-spacing: -0.2vw;
      }
      h3 {
        font-size: 2.4em;
        line-height: 1;
        font-weight: 400;
        letter-spacing: -0.15vw;
      }
      h4 {
        font-size: 1.7em;
        line-height: 1.35;
        font-weight: 400;
        letter-spacing: -0.04vw;
      }
      h5 {
        font-size: 1em;
        line-height: 1.5;
        color: var(--grey);
      }
      h6 {
        text-transform: uppercase;
        line-height: 1.5;
        color: var(--white);
        font-size: 0.8em;
        letter-spacing: 0.1vw;
      }
      p {
        margin-top: 1vw;
        font-size: 1em;
        line-height: 1.35;
        color: var(--grey);
      }
      .page {
        padding: 5.5vw;
      }
      .nav {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        padding: 6vw;
        padding-right: 5.5vw;
        padding-left: 5.5vw;
        top: 5.5vw;
        min-width: 100vw;
        margin: auto;
        justify-content: end;
        align-items: center;
        margin: auto !important;
        z-index: 3;
        left: 50%;
        transform: translate(-50%, -50%);
        padding-top: 0;
        padding-bottom: 0;
        height: 6.5vw;
        padding-top: 0vw;
        position: fixed !important;
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
        transition: top 0.3s ease, background 0.3s ease, padding 0.3s ease !important; /* Added transition for smooth movement */
      }
      .nav.fixed {
        position: fixed !important;
        padding-right: 5.5vw;
        padding-left: 5.5vw;
        min-width: 100vw;
        background: rgb(5, 5, 18, 1);
        height: 6.5vw;
        padding-top: 1vw;
        top: 2.4vw;
        -webkit-box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.04);
        -moz-box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.04);
        box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.04);
        transition: background 0.3s ease, padding 0.3s ease, top 0.3s ease !important; /* Added transition for smooth movement */
      }
      .nav.hide {
        top: -3.5vw !important;
        transition: top 0.3s cubic-bezier(0.27, 0, 0, 0.99) !important;
      }
      .logo {
        grid-column: 1/1;
      }
      .logo img {
        min-width: 6vw;
        max-width: 6vw;
      }
      .burger {
        display: none;
      }
      .menu-overlay {
        display: none;
      }
      .menu {
        grid-column: 8/13;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        font-size: 0.7em;
      }
      #menu-link {
        margin-top: 0.35vw;
      }
      .menu .nav-cta {
        padding: 1vw 1.5vw;
        border-radius: 0.3vw;
        background: linear-gradient(66deg, rgba(169, 45, 76, 1) 24%, rgba(95, 42, 87, 1) 100%);
        background-size: 100% 100%;
        transition: background 0.5s ease;
      }
      .menu .nav-cta:hover {
        background-size: 200% 200%;
      }
      .split-parent,
      .split-child {
        overflow-y: hidden !important;
        white-space: nowrap;
      }
      h1 .split-parent {
        overflow-x: visible !important;
        padding-bottom: 0vw;
        margin-bottom: -1.2vw;
      }
      h1 .split-child {
        padding-bottom: 1.7vw;
        padding-right: 0vw;
        overflow-x: visible !important;
      }
      #cursor {
        position: fixed;
        z-index: 9999999999 !important;
        left: 0;
        top: 0;
        border-radius: 100%;
        pointer-events: none;
        will-change: transform;
        mix-blend-mode: difference;
      }
      .grid-line {
        position: relative;
      }
      .section {
        position: relative;
        margin-bottom: 13vw;
      }
      .contact .section {
        margin-bottom: 0vw;
      }
      .eyebrow {
        display: flex;
        border-radius: 50vw;
        border: 0.8px solid var(--white);
        text-transform: uppercase;
        position: absolute;
        justify-content: center;
        padding: 0.3vw 0.8vw;
        grid-gap: 0.7vw;
        align-items: center;
        top: 0;
        left: 0;
      }
      .eyebrow h5 {
        color: var(--white) !important;
        letter-spacing: 0.1vw;
        font-size: 0.7em;
      }
      .red-dot {
        background-color: var(--red) !important;
        border-radius: 50vw;
        width: 0.5vw;
        height: 0.5vw;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      @media (hover: hover) and (pointer: fine) {
        .cursor__circle {
          width: 4vw;
          height: 4vw;
          border-radius: 100%;
          border: solid 1.5px var(--beige);
          transition: all 0.4s cubic-bezier(0.52, 0.02, 0, 0.99);
        }
        #cursor.overlay .cursor__circle {
          width: 0.5vw;
          height: 0.5vw;
          background-color: var(--beige);
          border-color: transparent;
        }
        #cursor.explore-overlay .cursor__circle {
          background: var(--beige);
          border-color: transparent;
          width: 8vw;
          height: 8vw;
          transition: all 0.4s cubic-bezier(0.52, 0.02, 0, 0.99);
        }
        #cursor.explore-overlay .cursor__circle::after {
          content: 'Explore';
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: black;
          font-size: 0.8em;
          line-height: 1;
          transition: all 0.4s cubic-bezier(0.52, 0.02, 0, 0.99);
        }
        .explore-overlay {
          backdrop-filter: blur(10px);
        }
      }
      @media only screen and (min-width: 600px) {
        .lottie-mobile {
          display: none;
        }
      }

      @media only screen and (max-width: 600px) {
        [class^='g-c-'] {
          display: flex;
          flex-direction: column;
        }
        .cursor__circle {
          display: none;
        }
        .number-span {
          font-size: 4vw !important;
        }
        h1 {
          font-size: 14em;
          line-height: 0.83;
          font-weight: 400;
          letter-spacing: -0.5vw;
        }
        h2 {
          font-size: 7em;
          line-height: 1.1;
          font-weight: 400;
          letter-spacing: -0.2vw;
        }
        h3 {
          font-size: 5.9em;
          line-height: 1;
          font-weight: 400;
          letter-spacing: -0.15vw;
        }
        h4 {
          font-size: 5em;
          line-height: 1.35;
          font-weight: 400;
          letter-spacing: -0.04vw;
        }
        h5 {
          font-size: 1em;
          line-height: 1.5;
          color: var(--grey);
        }
        h6 {
          text-transform: uppercase;
          line-height: 1.5;
          color: var(--white);
          font-size: 2.5em;
          letter-spacing: 0.1vw;
        }
        p {
          margin-top: 1vw;
          font-size: 3.2em;
          line-height: 1.35;
          color: var(--grey);
        }
        .grid {
          display: flex !important;
        }
        .block-space {
          margin-top: 10vw;
          margin-bottom: 10vw;
        }
        .eyebrow {
          padding: 0.6vw 2vw;
          grid-gap: 0.7vw;
          align-items: center;
          top: 0;
          left: 0;
        }
        .eyebrow h5 {
          font-size: 2.4em;
        }
        .red-dot {
          width: 1.4vw;
          height: 1.4vw;
          margin-right: 1vw;
        }
        .section {
          margin-top: 25vw;
          margin-bottom: 25vw;
        }
        .no-margin {
          margin: 0 !important;
          padding: 0 !important;
        }
        .nav {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          margin: 5.5vw;
          top: 5vw;
          width: unset;
          margin: auto;
          justify-content: end;
          align-items: center;
          margin: auto !important;
          background: transparent;
          z-index: 3;
          left: unset;
          transform: unset;
          position: relative !important;
          transition: background 0.3s ease, padding 0.3s ease !important; /* Added transition for smooth movement */
        }
        .menu {
          background: white;
          position: fixed;
          display: flex;
          flex-direction: column !important;
          justify-content: start;
          align-items: start;
          grid-gap: 5vw;
          padding: 8vw;
          padding-right: 0;
          padding-top: 10vw;
          border-radius: 5vw 0vw 0vw 0vw;
          bottom: 0;
          right: 0;
          color: black;
        }
        .logo img {
          min-width: 18vw;
          max-width: 18vw;
        }
        .menu .nav-cta {
          padding: 3vw 5vw;
          border-radius: 1vw;
          color: var(--beige) !important;
          font-size: 2.9vw !important;
        }
        .menu {
          grid-column: 4/12;
          font-size: 6em;
          flex-direction: row;
          transform: translate(100%, 100%);
        }
        .menu-overlay {
          background: rgba(5, 5, 18, 0.3);
          height: 100vh;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 0;
          opacity: 0;
          display: none;
        }
        .menu-trigger {
          width: 30vw;
          height: 18vw;
          position: fixed;
          top: 0;
          right: 0;
          z-index: 9999999;
        }
        .burger {
          display: flex;
          position: fixed;

          right: 5vw;
          mix-blend-mode: difference;
        }
        .menu-button {
          margin-top: 2.7vw;
          font-size: 3.6vw;
          letter-spacing: 0.5vw;
          text-align: right;
          height: 5vw;
          flex-direction: column;
          overflow: hidden;
        }
        .menu .link {
          counter-increment: linkCounter;
          position: relative;
          left: -10vw;
        }

        .menu .link:before {
          content: counter(linkCounter, decimal-leading-zero);
          margin-left: 5vw;
          position: relative;
          font-size: 5px;
          top: -7vw;
          left: 5vw;
          color: var(--red);
          border: 0.5px solid var(--red);
          border-radius: 50vw;
          padding: 0vw 0.8vw;
        }
      }
    `}</style>
  );
};
