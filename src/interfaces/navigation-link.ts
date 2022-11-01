import { ReactNode } from 'react';

export interface NavigationLink {
  to: string;
  label: string;
  iconPath: ReactNode;
}
