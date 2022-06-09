import React from 'react';
import styles from './header.module.scss';
import people from '../../assets/images/people.png';
import ai from '../../assets/images/ai.png';

export const Header = () => {
  return (
    <div className={`${styles.header} section__padding`} id='home'>
      <div className={styles.content}>
        <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence
          way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <div className={styles.input}>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>

        <div className={styles.people}>
          <img src={people} alt='people' />
          <span>1,600 people requested access a visit in last 24 hours</span>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src={ai} alt='ai' />
      </div>
    </div>
  );
};
