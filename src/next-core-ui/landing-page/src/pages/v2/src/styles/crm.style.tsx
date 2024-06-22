export const CrmPageStyles: React.FC = () => {
  return (
    <style global jsx>{`
      .services-indicator {
        position: relative;
      }
      .service-page-hero {
        margin-top: 8vw;
        margin-bottom: 8vw;
        display: flex;
        flex-direction: column;
        grid-gap: 5vw;
      }
      .service-page-heading {
        display: inline-flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
      }
      .page-cover-image img {
        min-width: 100%;
        max-width: 100%;
      }
      .aspect-box {
        background: #eee7e7;
        padding: 2.8vw;
        width: 22.5vw;
        border-radius: 1.5vw;
        display: flex;
        flex-direction: column;
        grid-gap: 2vw;
      }
      .aspect-box img {
        min-width: 5vw;
        max-width: 5vw;
      }
      .aspect-box h3 {
        font-size: 1.5vw;
        letter-spacing: -0.1vw;
        line-height: 1.1;
      }
      .aspects-section {
        display: flex;
        flex-direction: column;
        grid-gap: 3vw;
        margin-bottom: 8vw;
      }
      .integration {
        margin-top: 10vw;
        margin-bottom: 10vw;
      }
      .integration-boxes {
        display: flex;
        grid-gap: 2.5vw;
        margin-top: 4vw;
      }
      .integration-box {
        background: linear-gradient(66deg, rgba(169, 45, 76, 1) 24%, rgba(95, 42, 87, 1) 100%);
        background-size: 100% 100%;
        border-radius: 1vw;
        height: 25vw;
        width: 30vw;
        display: flex;
        padding: 3vw;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        color: var(--beige);
      }
      .integration-box p {
        color: var(--beige) !important;
        max-width: 85% !important;
      }
      .integration-box h3,
      .additional-box h3 {
        font-size: 1.5vw;
        line-height: 1.1;
      }
      .additional-boxes {
        display: flex;
        grid-gap: 2.5vw;
        flex-wrap: wrap;
      }
      .additional-box {
        border-radius: 1vw;
        border: 0.5px solid var(--black);
        height: 18vw;
        width: 26.6vw;
        display: flex;
        padding: 3vw;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        color: var(--black);
      }
      .additional-box p {
        color: var(--black);
        max-width: 88%;
      }
      @media only screen and (max-width: 600px) {
        .service-page-hero {
          margin-top: 15vw;
          margin-bottom: -10vw !important;
          grid-gap: 10vw;
        }
        .service-page-hero h1 {
          font-size: 10vw;
        }
        .cms-intro {
          padding-top: 10vw;
        }
        .grid-line {
          display: flex !important;
          flex-direction: column;
        }
        .padding-top {
          padding-top: 15vw;
        }
        .aspect-box {
          padding: 8vw;
          width: 100%;
          border-radius: 3vw;
          grid-gap: 5vw;
          margin-bottom: 5vw;
        }
        .aspect-box img {
          min-width: 15vw;
          max-width: 15vw;
        }
        .aspect-box h3,
        .integration-box h3,
        .additional-box h3 {
          font-size: 4.5vw !important;
          max-width: 75%;
          line-height: 1.1;
        }
        .integration-boxes {
          display: flex;
          flex-direction: column;
          grid-gap: 2.5vw;
          margin-top: 4vw;
        }
        .integration-box {
          height: 65vw;
          width: 100%;
          display: flex;
          padding: 8vw;
          border-radius: 3vw;
        }
        .additional-boxes {
          grid-gap: 5vw;
        }
        .additional-box {
          height: auto;
          width: 100%;
          display: flex;
          padding: 8vw;
          border-radius: 3vw;
        }
      }
    `}</style>
  );
};
