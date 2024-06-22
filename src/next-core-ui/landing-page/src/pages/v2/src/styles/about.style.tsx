export const AboutPageStyles: React.FC = () => {
  return (
    <style global jsx>{`
      .inner-page-white {
        background: var(--beige);
        color: var(--black);
      }
      .inner-page-white .link:after {
        border-color: var(--black) !important;
      }
      .inner-page-white h4,
      .inner-page-white p,
      .inner-page-white .home-intro-text {
        color: var(--mid-brown) !important;
      }
      .inner-page-white .red-glow {
        display: none;
      }
      .inner-page-white .nav-cta {
        color: var(--beige);
      }
      .inner-page-white .eyebrow h5 {
        color: var(--black) !important;
      }
      .inner-page-white .eyebrow {
        border-color: var(--black) !important;
      }
      .inner-page .inner-hero {
        margin-top: 6vw;
      }
      .inner-page .inner-page-intro {
        max-width: 55vw;
        margin: auto;
      }
      .inner-page-white .nav.fixed {
        background: rgb(255, 251, 251, 1);
      }
      .inner-page .inner-big-heading {
        margin-bottom: 5vw;
      }
      .inner-page .inner-big-heading h1 {
        font-size: 8vw;
        display: flex;
        max-width: 0vw;
        margin: auto;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .inner-page .inner-page-intro {
        text-align: center;
        color: var(--mid-brown);
      }
      .inner-page-white .about-image-1 {
        min-width: 28vw;
        max-width: 28vw;
      }
      .inner-page-white .about-image-2 {
        min-width: 30vw;
        max-width: 30vw;
        position: relative;
        top: 21.5vw;
      }
      .inner-page-white .inner-page .big-marquee {
        position: relative;
        top: 0vw;
        z-index: -1;
        margin-top: -30vw;
        color: #eee7e7;
      }
      .inner-page-white .about-why-box {
        background: linear-gradient(66deg, rgba(169, 45, 76, 1) 24%, rgba(95, 42, 87, 1) 100%);
        background-size: 100% 100%;
        border-radius: 1vw;
        height: 30vw;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .inner-page-white .about-why-box img {
        min-width: 8vw;
        max-width: 8vw;
      }
      .inner-page-white .about-partner-box {
        margin-top: 2vw;
        background: #f6f1f1;
        padding: 3vw;
        border-radius: 1vw;
      }
      .inner-page-white .delphi-image {
        min-width: 12vw;
        max-width: 12vw;
        margin-bottom: 2vw;
      }
      .inner-page-white .partner-split-box {
        display: flex;
        grid-gap: 6vw;
        justify-content: center;
        align-items: start;
      }
      .inner-page-white .footer .link {
        color: var(--mid-brown) !important;
      }
      .inner-page-white .why-text-block {
        display: flex;
        flex-direction: column;
        grid-gap: 2vw !important;
      }
      .inner-page-white .why-us {
        margin-top: 20vw;
      }
      .inner-page-white .why-us .section {
        margin-top: -5vw !important;
      }
      @media only screen and (max-width: 600px) {
        .inner-page .inner-hero {
          margin-top: 17vw;
        }
        .inner-page .inner-big-heading h1 {
          font-size: 11vw;
        }
        .inner-page .inner-page-intro {
          max-width: 100%;
          margin: auto;
        }
        .inner-page-white .why-us .section {
          display: flex;
          flex-direction: column;
          margin-bottom: -5vw;
        }
        .inner-page-white .partners .section {
          display: flex;
          flex-direction: column-reverse;
          padding-top: 15vw !important;
        }
        .inner-page-white .why-text-block {
          align-self: start !important;
        }
        .inner-page-white .why-text-block p {
          margin-top: -4vw !important;
          margin-bottom: 4vw !important;
        }
        .inner-page-white .about-why-box img {
          min-width: 22vw;
          max-width: 22vw;
        }
        .inner-page-white .about-why-box {
          height: 70vw;
        }
        .inner-page-white .partner-split-box {
          flex-direction: column;
          justify-content: start;
          align-items: start;
          grid-gap: 5vw;
          padding: 5vw;
        }
        .inner-page-white .partner-split-box img {
          min-width: 30vw;
          max-width: 30vw;
        }
        .inner-page-white .why-text-block {
          margin-top: 10vw !important;
        }
        .inner-page-white .partner-split-box p {
          margin-top: 6vw;
        }
        .inner-page-white .about-image-1 {
          min-width: 42vw;
          max-width: 42vw;
        }
        .inner-page-white .about-image-2 {
          min-width: 40vw;
          max-width: 40vw;
          position: relative;
          top: 21.5vw;
          left: 5vw;
        }
      }
    `}</style>
  );
};
