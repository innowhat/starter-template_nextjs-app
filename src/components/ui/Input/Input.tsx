import React, { FC } from 'react';
import styles from './Input.module.css';
import { InputProps } from './Input.types';

const Input: FC<InputProps> = ({
    size = 'md',
    variant = 'default',
    dataTestid = 'input',
    className = '',
    ...rest
}) => {
    const classNames = [
        styles.input,
        styles[size],
        styles[variant],
        className,
    ].join(' ');

    return <input className={classNames} data-testid={dataTestid} {...rest} />;
};

export default Input;
