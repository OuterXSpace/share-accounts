import { ITotoLink } from '../../../../../../../../models';

export interface ILandingPageButtonV1Props extends ITotoLink, React.DOMAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button' | undefined;
  children?: React.ReactNode;
}
