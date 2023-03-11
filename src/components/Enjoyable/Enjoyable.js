import styles from './Enjoyable.module.scss';
import pattern from "../../images/patterns/pattern-divide.svg";
import React from "react";

const Enjoyable = () => {
  return(
    <div className={styles.enjoy}>
      <div className={styles.enjoy__content}>
        <div className={styles.enjoy__img}></div>
        <div className={styles.enjoy__description}>
          <img className={styles.pattern} src={pattern} alt="" />
          <div>
            <h2 className="text__L">
              Enjoyable place<br />
              for all the family
            </h2>
            <p className="p__text">
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enjoyable;
