import React from 'react';
import Layout from '@theme/Layout';
import versions from '../../versions.json';
import HomepageFeatures from '../components/HomepageFeatures';
import clsx from 'clsx';

import styles from './index.module.css';

function HomepageHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">Versions</h1>
                <p className="hero__subtitle">
                    {versions.map((item) => {
                        return (
							<a className={styles.versions} href={'docs/' + item + '/intro'}>{item}</a>
                        );
                    })}
                </p>
            </div>
        </header>
    );
}

export default function Versions() {
    return (
        <Layout>
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
