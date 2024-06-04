export interface IDrawerCartProps {
  isOpenCart?: boolean;
  handleCloseCart?: () => void;
  handleOpenCart?: () => void;
  position?: 'left' | 'right';
}
