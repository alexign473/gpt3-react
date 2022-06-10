import React from 'react';
import styles from './cta.module.scss';

export const Cta = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.content}>
        <span>Request Early Access to Get Started</span>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className={styles.btn}>
        <button type='button'>Get&nbsp;Started</button>
      </div>
    </div>
  );
};
