import React from 'react';
import { Feature } from '../../components/feature/Feature';
import styles from './whatgpt3.module.scss';

export const WhatGPT3 = () => {
  return (
    <div className={`${styles.whatgpt3} section__margin`} id='whatgpt3'>
      <div className={styles.topFeature}>
        <Feature
          variant='top-feature'
          title='What is GPT-3'
          text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
        />
      </div>
      <div className={styles.heading}>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <span>Explore The Library</span>
      </div>
      <div className={styles.container}>
        <Feature
          variant='col'
          title='Chatbots'
          text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
        />
        <Feature
          variant='col'
          title='Knowledgebase'
          text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
        />
        <Feature
          variant='col'
          title='Education'
          text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
        />
      </div>
    </div>
  );
};
