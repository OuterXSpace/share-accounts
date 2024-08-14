import React from 'react';
import { NotFoundProps } from './not-found.type';
import styles from './styles.module.scss';

export const NotFound: React.FC<NotFoundProps> = (props) => {
  const { className = '', title = '404 Page Not Found.' } = props;

  return (
    <div className={`${styles['not-found']} ${className}`}>
      <div className={styles['not-found__number']}>
        4
        <span role="img" aria-label="Crying Face" className={styles['not-found__emoji']}>
          😢
        </span>
        4
      </div>
      <p className={styles['not-found__message']}>{title}</p>
    </div>
  );
};
