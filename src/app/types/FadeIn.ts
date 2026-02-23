import { ReactNode } from 'react';

export type FadeDirection = 'up' | 'down' | 'left' | 'right';

export interface IFadeInProps {
  children: ReactNode;
  direction?: FadeDirection;
  delay?: number;
  className?: string;
}
