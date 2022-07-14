import React from 'react';
import Layout from '../components/layouts/layout';
import styles from './all.module.scss';

const All = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}></main>
      </div>
    </Layout>
  );
};

export default All;
