import styles from './Card.module.css';
import { CardProps } from './Card.types';

const Card = ({
    children,
    variant = 'default',
    dataTestid = 'card',
    className = '',
}: CardProps) => {
    const classNames = [styles.card, styles[variant], className].join(' ');

    return (
        <div className={classNames} data-testid={dataTestid}>
            {children}
        </div>
    );
};

export default Card;
