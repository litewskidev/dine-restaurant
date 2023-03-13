import { useState } from 'react';
import styles from './NumInput.module.scss';

const NumInput = () => {

  const [peopleNum, setPeopleNum] = useState(4);


  return(
    <div className={styles.numinput}>
      <h4>{peopleNum} people</h4>
    </div>
  );
};

export default NumInput;
