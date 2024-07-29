export const MenuMobileStyle: React.FC = () => {
  return (
    <style jsx global>{`
      .counter-link {
        counter-increment: linkCounter;
      }

      .counter-link:before {
        content: counter(linkCounter, decimal-leading-zero);
      }

      .animation-slide-left-menu {
        transform: translate3d(0px, 0vw, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
          skew(0deg, 0deg);
        transform-style: preserve-3d;
      }

      .animation-slide-right-menu {
        transform: translate3d(100%, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
          skew(0deg, 0deg);
        transform-style: preserve-3d;
      }

      .animation-slide-top-menu {
        transform: translate3d(0px, 0vw, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
          skew(0deg, 0deg);
        transform-style: preserve-3d;
      }

      .animation-slide-down-menu {
        transform: translate3d(0px, -4.7vw, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
          skew(0deg, 0deg);
        transform-style: preserve-3d;
      }
    `}</style>
  );
};
