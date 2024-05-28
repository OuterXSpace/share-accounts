import React from 'react';
import { HomePage02 } from '../../pages';
import { BodyTheme02Props } from './body.type';

export const BodyTheme02: React.FC<BodyTheme02Props> = (props) => {
  const { slug, systemConfig } = props;

  switch (slug) {
    case 'HOME':
      return <HomePage02 />;
    default:
      return <div />;
  }
};
