export const MainPageStyles: React.FC = () => {
  return (
    <style global jsx>{`
      .homepage .page {
        padding-top: 15vw;
      }
      .hero-section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .hero {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        height: 100vh;
      }
      video,
      .video {
        display: none;
      }
      .hero-visual {
        width: 100vw;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 2;
        pointer-events: none;
      }
      .hero-bottom-text {
        display: flex;
        justify-content: space-between;
        align-items: end;
        position: absolute;
        left: 5.5vw;
        right: 5.5vw;
        bottom: 5.5vw;
        font-size: 0.8em;
      }
      .hero-heading h1 {
        margin-left: -0.4vw;
      }
      .hero-heading h4 {
        margin-bottom: 1.5vw;
        font-weight: 500;
        letter-spacing: -0.09vw;
      }
      .hero-down-arrow {
        min-width: 5vw;
        max-width: 5vw;
      }
      .red-glow {
        background: #3a0f24;
        border-radius: 20vw;
        width: 40vw;
        height: 40vw;
        filter: blur(100px);
        z-index: -1;
        pointer-events: none;
        position: absolute;
      }
      @keyframes shrinkAndGrow {
        0% {
          transform: scale(0.8);
        }
        50% {
          transform: scale(1.7);
        }
        100% {
          transform: scale(0.8);
        }
      }
      .glow-left {
        bottom: -20vw;
        left: -25vw;
      }
      .glow-right {
        bottom: -20vw;
        right: -25vw;
      }
      .home-intro-text {
        color: var(--soft-red);
      }
      .home-image-1 {
        min-width: 30vw;
        max-width: 30vw;
      }
      .home-image-2 {
        min-width: 15vw;
        max-width: 15vw;
      }
      .big-marquee {
        margin-bottom: 10vw;
        width: 120%;
        left: -10vw;
        white-space: nowrap;
        overflow: hidden;
        position: relative;
        font-family: 'PPMonumentExtended-Medium';
        text-transform: uppercase;
      }
      .big-marquee div {
        display: inline-block;
        animation: marquee 20s linear infinite;
        font-size: 18vw;
        letter-spacing: -0.9vw;
        padding: 5vw 5vw;
      }
      @keyframes marquee {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
      .splide {
        margin-bottom: 15vw !important;
      }
      .splide__list {
        display: flex;
        grid-gap: 5vw;
      }
      .splide__slide {
        min-width: 30vw;
        max-width: 30vw;
        min-height: 29vw;
        max-height: 29vw;
        padding: 3vw;
        display: flex;
        flex-direction: column;
        grid-gap: 1vw;
        position: relative;
      }
      .splide__slide h3 {
        flex-wrap: wrap;
        max-width: 25vw;
      }
      .slide-icon {
        margin-top: 5.3vw;
        min-width: 5vw;
        max-width: 5vw;
      }
      .explore-btn {
        font-family: 'PPMonumentExtended-Medium';
        text-transform: uppercase;
        padding: 0.6vw 1.5vw;
        border-radius: 2vw;
        font-size: 0.9em;
        background: rgb(169, 45, 76);
        margin: auto;
        position: absolute;
        bottom: 1.8vw;
        right: 2vw;
        background: linear-gradient(66deg, rgba(169, 45, 76, 1) 24%, rgba(95, 42, 87, 1) 100%);
      }
      .why-bullets {
        display: flex;
        flex-wrap: wrap;
        grid-gap: 5vw;
      }
      .why-bullet {
        width: 43%;
        padding-left: 2vw;
        border-left: 1px solid var(--red);
      }
      .why-bullet p {
        color: var(--red-brown);
      }
      .why-us-split-container {
        display: flex;
        grid-gap: 4.5vw;
      }
      .numbers-split .image {
        min-width: 24vw;
        max-width: 24vw;
      }
      .numbers-container {
        display: flex;
        flex-direction: column;
        grid-gap: 2vw;
        justify-content: space-between;
      }
      .numbers-highlights {
        display: flex;
        flex-direction: column;
        grid-gap: 1vw;
      }
      .numbers-highlights h3 {
        color: var(--red);
        font-size: 5vw;
        letter-spacing: -2w !important;
      }
      .numbers-highlights h4 {
        font-size: 1.3vw;
      }
      .cta-circle {
        background: linear-gradient(66deg, rgba(169, 45, 76, 1) 24%, rgba(95, 42, 87, 1) 100%);
        width: 9vw;
        height: 9vw;
        border-radius: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
      }
      .cta-circle img {
        min-width: 2.5vw;
        max-width: 2.5vw;
        position: absolute;
      }
      .cta-text-block {
        height: 3.8vw;
        overflow: hidden;
        margin-left: 12vw;
      }
      .cta-container {
        grid-gap: flex;
        justify-content: start;
        align-items: center;
        grid-gap: 2.5vw;
        overflow: hidden;
      }
      .footer {
        margin-top: 15vw;
      }
      .footer-logo {
        display: flex;
        justify-content: start;
        align-items: start;
      }
      .footer-logo img {
        min-width: 18vw;
        max-width: 18vw;
        align-self: end;
      }
      .fc h3 {
        font-size: 1.3vw;
        letter-spacing: -0.02vw;
        margin-bottom: 2vw;
      }
      .fc p {
        color: var(--red-brown);
        line-height: 1.6;
      }
      .footer-menu {
        display: inline-flex;
        flex-direction: column;
        grid-gap: 0.8vw;
        justify-content: start;
        align-items: start;
      }
      .footer-menu a {
        color: var(--red-brown);
        text-align: left;
      }
      .link {
        z-index: 10;
        text-decoration: none;
        padding-bottom: 0.2vw;
      }
      .link:after {
        display: block;
        content: '';
        border-bottom: solid 1px #fff;
        transform: scaleX(0);
        transition: transform 300ms ease-in-out;
        transform-origin: 100% 0%;
        padding-bottom: 0.2vw;
        margin: auto;
        text-align: left;
      }
      .link:hover:after {
        transform: scaleX(1);
        transform-origin: 0 50%;
      }
      @media only screen and (max-width: 600px) {
        .link:after {
          display: none !important;
        }
        video,
        .video {
          display: flex;
          min-width: 100vw !important;
          max-width: 100vw !important;
          height: 100vw !important;
          position: absolute;
          top: 15vh;
          left: 0vw;
          border-radius: 100vw;
          overflow: hidden !important;
        }
        .hero-visual {
          display: none;
        }
        .red-glow {
          background: #3a0f24;
          border-radius: 20vw;
          width: 40vw;
          height: 40vw;
          filter: blur(30px);
          z-index: -1;
          pointer-events: none;
          position: absolute;
        }
        .home-image-1 {
          min-width: 50vw;
          max-width: 50vw;
        }
        .home-image-2 {
          min-width: 30vw;
          max-width: 30vw;
          position: relative;
          top: 10vw;
          left: 6.5vw;
        }
        .big-marquee {
          margin-top: 25vw;
          margin-bottom: 25vw;
        }
        .splide {
          top: 15vw !important;
          margin-bottom: 15vw !important;
        }
        .splide__slide {
          min-width: 70vw;
          max-width: 70vw;
          min-height: 69vw;
          max-height: 69vw;
          padding: 6vw;
        }
        .splide__slide h3 {
          max-width: 100% !important;
        }
        .slide-icon {
          margin-top: 9vw;
          min-width: 15vw;
          max-width: 15vw;
        }
        .explore-btn {
          padding: 1.5vw 3vw;
          border-radius: 2vw;
          font-size: 2em;
          position: absolute;
          bottom: 5vw;
          right: 5vw;
        }
        .why-bullets {
          grid-gap: 13vw;
          padding-left: 22vw;
        }
        .why-bullet {
          width: 100%;
          padding-left: 5vw;
        }
        .why-bullet p {
          margin-top: 5vw;
        }
        .why-us {
          padding-top: 1vw !important;
        }
        .why-us-split-container {
          display: flex;
          flex-direction: column-reverse;
          grid-gap: 15vw;
        }
        .numbers-split .image {
          min-width: 60vw;
          max-width: 60vw;
          position: relative;
          left: 20vw;
        }
        .numbers-container {
          display: flex;
          flex-direction: column;
          grid-gap: 8vw;
          justify-content: space-between;
        }
        .numbers-highlights {
          display: flex;
          flex-direction: column;
          grid-gap: 2vw;
          position: relative;
          left: 20vw;
        }
        .numbers-highlights h3 {
          font-size: 18vw;
          letter-spacing: -1.7vw;
        }
        .numbers-highlights h4 {
          font-size: 4vw;
        }
        .cta-text-block {
          height: 6.4vw;
          overflow: hidden;
          margin-left: 26vw;
        }
        .cta-circle {
          width: 20vw;
          height: 20vw;
        }
        .cta-circle img {
          min-width: 7vw;
          max-width: 7vw;
        }
        .cta-container {
          margin-top: 15vw;
          grid-gap: 5.5vw;
        }
        .footer .section {
          display: flex !important;
          flex-direction: column-reverse !important;
        }
        .footer-column {
          display: flex;
          flex-direction: column;
          grid-gap: 10vw;
        }
        .fc h3 {
          font-size: 4.5vw;
          letter-spacing: -0.02vw;
          margin-bottom: 6vw;
        }
        .fc p,
        .fc a {
          color: var(--red-brown);
          font-size: 3.5vw;
        }
        .fc a {
          line-height: 2;
        }
        .footer-logo {
          margin-top: 8vw;
        }
        .footer-logo img {
          min-width: 100%;
        }
      }
    `}</style>
  );
};
