import styles from './Button.module.css';
import { ButtonProps } from './Button.types';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    disabled = false,
    dataTestid = 'button',
}: ButtonProps) => {
    const classNames = [
        styles.button,
        styles[variant],
        styles[size],
        disabled ? styles.disabled : '',
    ].join(' ');

    return (
        <button
            className={classNames}
            onClick={onClick}
            disabled={disabled}
            data-testid={dataTestid}
        >
            {children}
        </button>
    );
};

export default Button;
