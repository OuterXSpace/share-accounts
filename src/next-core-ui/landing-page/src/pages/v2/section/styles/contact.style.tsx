export const ContactPageStyles: React.FC = () => {
  return (
    <style global jsx>{`
      .contact-page {
        padding-top: 12vw !important;
      }
      .split-contact {
        height: 67vh;
        display: flex;
      }
      .contact-right {
        flex: 1;
      }
      .contact-left {
        flex: 2;
      }
      .contact-left {
        display: flex;
        flex-direction: column;
        grid-gap: 5vw;
        height: 67vh;
        justify-content: space-between;
      }
      .contact-left h1 {
        font-size: 7vw;
        position: relative;
        left: -0.3vw;
      }
      .form {
        height: 67vh !important;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .contact-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
      .contact-column {
        flex: 1;
        display: flex;
        flex-direction: column;
        grid-gap: 1.5vw;
      }
      .contact-column img {
        min-width: 7vw;
        max-width: 7vw;
        margin-bottom: 1vw;
      }
      .contact-column h3 {
        font-size: 1.7em;
        letter-spacing: -0.05vw;
      }
      .label-text span {
        color: var(--red);
      }
      .form-field {
        border: none;
        background: transparent;
        border-bottom: 2px solid #eee7e7;
      }
      .message {
        height: 15vh !important;
      }
      .submit {
        background: linear-gradient(66deg, rgba(169, 45, 76, 1) 24%, rgba(95, 42, 87, 1) 100%);
        background-size: 100% 100%;
        border-radius: 1vw;
        width: 100%;
        padding: 2vw 0vw;
        font-size: 1.7vw;
      }
      .w-input,
      .w-select {
        padding: 0 !important;
        height: 7vh;
        font-size: 1.3vw !important;
        color: var(--mid-brown) !important;
      }
      @media only screen and (max-width: 600px) {
        .contact-page {
          padding-top: 25vw !important;
        }
        .split-contact {
          display: flex;
          flex-direction: column;
          grid-gap: 12vw;
        }
        .split-contact,
        .contact-left,
        .contact-right,
        .form {
          height: unset !important;
        }
        .contact-column {
          margin-top: 8vw;
        }
        .contact-left h1 {
          font-size: 11vw;
        }
        .form {
          margin-top: 5vw;
        }
        .contact-column {
          flex: unset;
          grid-gap: 5vw;
        }
        .contact-column img {
          min-width: 15vw;
          max-width: 15vw;
        }
        .contact-column h3 {
          font-size: 3.7em;
          letter-spacing: -0.05vw;
        }
        .label-text {
          font-size: 3vw;
          margin-bottom: 2vw;
          margin-top: 1vw;
        }
        .w-input,
        .w-select {
          padding: 0 !important;
          height: 13vw;
          font-size: 3vw !important;
          color: var(--mid-brown) !important;
        }
        .submit {
          margin-top: 3vw;
          padding: 7vw 0vw;
          font-size: 4.7vw;
        }
      }
    `}</style>
  );
};
