import React from 'react';
import { SnowProps } from './snow.type';
import styles from './styles.module.scss';

export const SnowComponent: React.FC<SnowProps> = (props) => {
  const { children, className, background = 'https://miso88.com/assets/images/login/login-bg.jpg' } = props;
  return (
    <div
      className={`${className} after:absolute after:content-[''] after:z-[1] after:top-0 after:left-0 after:w-full after:h-full after:bg-[#000000B3] absolute flex flex-col items-center left-0 top-0 w-full bg-cover bg-no-repeat min-h-screen p-10 bg-center`}
      style={{
        backgroundImage: `url("${background}")`,
      }}
    >
      <div className="fixed inset-x-0 top-0">
        <div className={styles.toto_snow_stars1} />
        <div className={styles.toto_snow_stars2} />
        <div className={styles.toto_snow_stars3} />
      </div>
      <div className="z-10">{children}</div>
    </div>
  );
};
