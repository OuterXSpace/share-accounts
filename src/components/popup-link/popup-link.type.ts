import React from 'react';
import { ITotoLink } from '../../models';

export interface IPopupLinkProps extends ITotoLink, React.AnchorHTMLAttributes<HTMLAnchorElement> {}
