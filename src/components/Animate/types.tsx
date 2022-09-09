export interface IAnimate {
  slideUp?: boolean;
  enterFrom?: 'top' | 'right' | 'bottom' | 'left';
  addSpace?: boolean;
  spinFromLeft?: boolean;
  spinFromRight?: boolean;
  time?: string;
  children: React.ReactNode;
}