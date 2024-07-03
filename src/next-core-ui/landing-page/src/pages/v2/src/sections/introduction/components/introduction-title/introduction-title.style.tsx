export const IntroductionTitleStyle: React.FC = () => {
  return (
    <style jsx global>{`
      .introduction__title {
        font-size: 2.5rem;
      }
      @media (max-width: 768px) {
        .introduction__title {
          font-size: 1.5rem;
        }
      }
    `}</style>
  );
};
