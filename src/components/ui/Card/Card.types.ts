import { ReactNode } from 'react';

export interface CardProps {
    children: ReactNode;
    variant?: 'default' | 'outlined' | 'elevated';
    dataTestid?: string;
    className?: string;
}
