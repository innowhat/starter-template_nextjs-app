import React from 'react';
import styles from './Home.module.css';
import siteData from '@/data/siteData.json';

const Home = () => {
    return (
        <div className={styles.home}>
            <h1>{siteData.pages.home.title}</h1>
            <p>{siteData.pages.home.subtitle}</p>
        </div>
    );
};

export default Home;
