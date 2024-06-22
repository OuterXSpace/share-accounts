export const CommonPageStyles: React.FC = () => {
  return (
    <style global jsx>{`
      body::before {
        content: '';
        width: 100%;
        height: 0%;
        background: linear-gradient(66deg, rgba(169, 45, 76, 1) 24%, rgba(95, 42, 87, 1) 100%);
        position: fixed;
        bottom: 0;
        left: 0;
        transition: all 0.8s cubic-bezier(0.89, 0.14, 0, 0.99);
        z-index: 99999999;
      }
      body::after {
        content: '';
        width: 100%;
        height: 100%;
        background: linear-gradient(66deg, rgba(169, 45, 76, 1) 24%, rgba(95, 42, 87, 1) 100%);
        position: fixed;
        top: 0;
        left: 0;
        transition: all 0.8s cubic-bezier(0.89, 0.14, 0, 0.99);
        z-index: 99999999;
      }
      .body-loaded {
        opacity: 1;
      }
      .body-loaded::after {
        height: 0% !important;
      }
      .body-loader::before {
        height: 100% !important;
      }
      .red-glow {
        animation: shrinkAndGrow 6s ease-in-out infinite alternate;
      }
    `}</style>
  );
};
