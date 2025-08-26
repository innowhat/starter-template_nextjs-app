import Link from 'next/link';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <span className={styles.logo}>LOGO</span>
            </div>

            <div className={styles.right}>
                <div className={styles.links}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
