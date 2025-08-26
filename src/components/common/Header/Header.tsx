import { Navigation } from '../Navigation';
import styles from './Header.module.css';
import { HeaderProps } from './Header.types';

const Header = ({ children }: HeaderProps) => {
    return (
        <header className={styles.header}>
            <Navigation />
            {children}
        </header>
    );
};

export default Header;
