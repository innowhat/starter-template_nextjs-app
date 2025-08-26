import { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'error' | 'success';
    dataTestid?: string;
};
