import { IDropdownMenuProps } from './dropdown-menu.type';

export const DropdownMenu: React.FC<IDropdownMenuProps> = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};
