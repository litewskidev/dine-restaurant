import { useState } from 'react';
import styles from './NumInput.module.scss';
import plus from '../../images/icons/icon-plus.svg';
import minus from '../../images/icons/icon-minus.svg';

const NumInput = (props) => {




  return(
    <div className={styles.numinput}>
      <div className={styles.numinput__content}>
        <img src={minus} onClick={props.decrement} alt=''/>
        <h4>{props.people} people</h4>
        <img src={plus} onClick={props.increment} alt='' />
      </div>
      <div className={styles.numinput__line}></div>
    </div>
  );
};

export default NumInput;
