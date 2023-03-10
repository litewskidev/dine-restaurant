import styles from './Enjoyable.module.scss';

const Enjoyable = () => {
  return(
    <div className={styles.enjoy}>
      <div className={styles.enjoy__description}>
        <h2 className={styles.enjoy__h2}>Enjoyable place<br />for all the family</h2>
        <p className={styles.enjoy__p}>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
      </div>
    </div>
  );
};

export default Enjoyable;
