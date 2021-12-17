import React from 'react';
import styles from './NotFound.module.css';

export default function NotFound({ error }) {
  return (
    <div className={styles.NotFound}>
      <h1>{error}</h1>;
    </div>
  );
}
