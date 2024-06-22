import { IntroductionBall } from './components/introduction-ball/introduction-ball.views';
import { IIntroductionProps } from './introduction.type';

export const Introduction: React.FC<IIntroductionProps> = (props) => {
  const { data, className } = props;
  return (
    <main className="h-screen grid grid-cols-12">
      <IntroductionBall />
    </main>
  );
};
