import { ITotoLink } from '../../../../../../../models';

export interface ILandingPageButtonV1Props extends ITotoLink, React.DOMAttributes<HTMLButtonElement> {
  type?: 'button' | 'link' | 'text' | 'submit';
  children?: React.ReactNode;
}