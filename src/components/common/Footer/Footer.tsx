import styles from './Footer.module.css';
import { FooterProps } from './Footer.types';

const Footer = ({ children = 'Footer section' }: FooterProps) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>{children}</div>
        </footer>
    );
};

export default Footer;
