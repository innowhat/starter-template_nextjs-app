import { MainLayoutProps } from './MainLayout.types';
import styles from './MainLayout.module.css';
import { Footer, Header } from '@/components/common';

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
