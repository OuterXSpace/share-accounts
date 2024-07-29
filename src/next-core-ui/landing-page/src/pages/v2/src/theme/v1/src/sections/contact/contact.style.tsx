export const ContactStyles: React.FC = () => {
  return (
    <style global jsx>{`
      body {
        background: #fffbfb !important;
        color: #050512 !important;
      }
      .container {
        padding: 0 5.5vw;
        min-width: 100vw;
        max-width: 100vw;
        display: block;
      }
      .submit {
        background: linear-gradient(66deg, #a92d4c 24%, #5f2a57 100%);
        background-size: 100% 100%;
        border-radius: 1vw;
        width: 100%;
        padding: 2vw 0vw;
        font-size: 1.7vw;
        font-family: 'PPMonumentExtended-Medium';
        text-transform: uppercase;
        -webkit-appearance: button;
        color: #fff;
        line-height: inherit;
        cursor: pointer;
        border: 0;
        text-decoration: none;
        display: inline-block;
        font: inherit;
        margin: 0;
      }
    `}</style>
  );
};
