import React from 'react';
import classNames from 'classnames';
import styles from './feature.module.scss';

export const Feature = ({ title, text, variant }) => {
  const featureClass = classNames(styles.feature, {
    [styles.featureTop]: variant === 'top-feature',
    [styles.featureCol]: variant === 'col',
    [styles.featureSmall]: variant === 'small',
  });

  return (
    <div className={featureClass}>
      <div className={styles.featureTitle}>
        <div />
        <h1>{title}</h1>
      </div>
      <div className={styles.featureText}>
        <p>{text}</p>
      </div>
    </div>
  );
};
