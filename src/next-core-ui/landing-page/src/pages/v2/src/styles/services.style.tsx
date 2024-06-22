export const ServicesPageStyles: React.FC = () => {
  return (
    <style global jsx>{`
      .services-page .inner-page-intro img {
        min-width: 48vw;
        max-width: 48vw;
      }
      .services-page h4,
      .services-page p,
      .services-page .home-intro-text {
        color: var(--soft-red);
      }
      .our-services .section {
        margin-top: 10vw !important;
        margin-bottom: 10vw !important;
      }
      .service-name-box {
        display: flex;
        flex-direction: column;
        grid-gap: 2vw;
        justify-content: start;
        align-items: start;
      }
      .service-name-box p {
        margin-top: 0 !important;
      }
      .service-name-box h5 {
        display: inline-block;
        font-size: 1.5vw;
        justify-content: start;
        align-items: start;
        color: var(--red);
        border: 0.5px solid var(--beige);
        border-radius: 50vw;
        padding: 0vw 0.8vw;
        line-height: 1.3;
        font-family: 'PPMonumentExtended-Medium';
      }
      .service-box-image img {
        min-width: 25vw;
        max-width: 25vw;
      }
      .service-all-bullets {
        margin-top: 3vw;
        display: flex;
        flex-direction: column;

        overflow: hidden;
      }
      .service-bullets {
        display: flex;
        flex-wrap: wrap;
        grid-gap: 4vw;
      }
      .service-bullets h3 {
        font-size: 1.6vw;
        line-height: 1.1;
      }
      .service-bullet {
        flex: 1;
        min-width: 24%;
        padding-left: 2vw;
        border-left: 1px solid var(--red);
      }
      .service-bullet p {
        color: var(--red-brown);
      }
      .seemore {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-gap: 1.2vw;
        border: 1px solid var(--beige);
        border-radius: 2vw;
        padding: 1.3vw 1.5vw;
      }
      .seemore h3 {
        font-size: 0.7vw;
        letter-spacing: 0.2vw;
        margin-left: 1vw;
        transition: margin 0.5s cubic-bezier(0.33, 0, 0, 0.99);
      }
      .seemore:hover h3 {
        margin-left: 3vw;
        transition: margin 0.5s cubic-bezier(0.33, 0, 0, 0.99);
      }
      .go-to-page {
        border: 1px solid black;
        color: var(--black);
        padding: 1.3vw 2vw;
        border-radius: 2vw;
        border: 1px solid var(--beige);
        background: linear-gradient(to right, black 50%, white 50%);
        background-size: 200% 100%;
        background-position: right bottom;
        transition: all 0.5s cubic-bezier(0.58, 0.08, 0, 0.99);
      }

      .go-to-page:hover {
        color: var(--beige);
        background-position: left bottom;
      }
      .go-to-page h3 {
        font-size: 0.7vw;
        letter-spacing: 0.2vw;
      }
      .plus-minus-icon {
        display: flex;
        flex-direction: column;
      }
      .plus-minus-icon img {
        position: absolute;
        min-width: 1.1vw;
        max-width: 1.1vw;
        margin-top: -0.1vw;
      }
      .plus-minus-icon .line-2 {
        transform: rotate(90deg);
      }
      .section-indicator {
        position: relative;
        top: -15vw;
        min-height: 2vw;
        min-width: 2vw;
        max-width: 2vw;
        max-height: 2vw;
      }
      @media only screen and (max-width: 600px) {
        .services-page .inner-page-intro img {
          min-width: 70vw;
          max-width: 70vw;
        }
        .our-services .section {
          display: flex;
          flex-direction: column;
        }
        .service-all-bullets {
          margin-top: 3vw;
          display: flex;
          flex-direction: column;
          grid-gap: 3vw;
          overflow: hidden;
        }
        .service-bullets {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          grid-gap: 5vw;
        }
        .service-name-box {
          grid-gap: 5vw;
          margin-top: 5vw;
          margin-bottom: 5vw;
        }
        .service-name-box h5 {
          font-size: 6vw;
          padding: 0vw 2vw;
        }
        .service-box-image img {
          min-width: 55vw;
          max-width: 55vw;
        }
        .seemore {
          grid-gap: 1.2vw;
          padding: 3vw 3vw;
          border-radius: 50vw;
        }
        .seemore h3 {
          font-size: 2.5vw;
          letter-spacing: 0.2vw;
          margin-left: 4vw;
        }
        .go-to-page {
          grid-gap: 1.2vw;
          padding: 3vw 5vw;
          border-radius: 50vw;
        }
        .go-to-page h3 {
          font-size: 2.5vw;
          letter-spacing: 0.2vw;
        }
        .plus-minus-icon img {
          min-width: 3.1vw;
          max-width: 3.1vw;
          margin-top: -0.1vw;
        }
        .service-all-bullets {
          grid-gap: 10vw !important;
          display: flex;
        }
        .service-bullets {
          max-width: 100%;
          display: flex;
          flex-direction: row;
          grid-gap: 10vw !important;
        }
        .service-bullet {
          max-width: 45%;
          min-width: unset;
        }
        .service-bullets h3 {
          font-size: 3vw;
          line-height: 1.3;
        }
        .section-indicator {
          top: -83vw;
        }
      }
    `}</style>
  );
};
