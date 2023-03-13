import { useState } from 'react';
import styles from './NumInput.module.scss';
import plus from '../../images/icons/icon-plus.svg';
import minus from '../../images/icons/icon-minus.svg';

const NumInput = () => {

  const [peopleNum, setPeopleNum] = useState(4);

  const increment = () => {
    if(peopleNum <= 9) {
    setPeopleNum(peopleNum + 1);
    }
  };

  const decrement = () => {
    if(peopleNum >= 2) {
    setPeopleNum(peopleNum - 1);
    }
  };


  return(
    <div className={styles.numinput}>
      <div className={styles.numinput__content}>
        <img src={minus} onClick={decrement} alt=''/>
        <h4>{peopleNum} people</h4>
        <img src={plus} onClick={increment} alt='' />
      </div>
      <div className={styles.numinput__line}></div>
    </div>
  );
};

export default NumInput;
