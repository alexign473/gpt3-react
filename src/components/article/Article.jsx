import React from 'react';
import classNames from 'classnames';
import styles from './article.module.scss';

export const Article = ({ articleFirst, imgUrl, date, title }) => {
  const articleStyle = classNames(styles.article, {
    [styles.articleFirst]: articleFirst,
  });
  return (
    <div className={articleStyle}>
      <div className={styles.image}>
        <img src={imgUrl} alt='blog'></img>
      </div>
      <div className={styles.content}>
        <div>
          <span>{date}</span>
          <h3>{title}</h3>
        </div>
        <span>Read Full Article</span>
      </div>
    </div>
  );
};
