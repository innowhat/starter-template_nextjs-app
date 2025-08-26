import React from 'react';
import styles from './AboutView.module.css';
import siteData from '@/data/siteData.json';
import { AboutViewProps } from './AboutView.types';

const AboutView = ({ children }: AboutViewProps) => {
    return (
        <div className={styles.aboutView}>
            <h1>{siteData.pages.about.title}</h1>
            <p>{siteData.pages.about.subtitle}</p>
            {children}
        </div>
    );
};

export default AboutView;
