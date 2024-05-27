import React from 'react';
import { IFooterTheme02Props } from './footer.type';

export const FooterTheme02: React.FC<IFooterTheme02Props> = (props) => {
  const { footerContent } = props;

  return <footer className="footer">footer</footer>;
};
