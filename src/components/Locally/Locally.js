import styles from './Locally.module.scss';
import pattern from '../../images/patterns/pattern-divide.svg';
import pattern__lines from '../../images/patterns/pattern-lines.svg';

const Locally = () => {
  return(
    <div className={styles.locally}>
      <div className={styles.locally__content}>
        <div className={styles.locally__description}>
          <img className={styles.pattern} src={pattern} alt='' />
          <div>
            <h2 className='text__L'>
              The most locally<br />
              sourced food
            </h2>
            <p className='p__text'>
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you’re eating the freshest, most sustainable food.
            </p>
          </div>
        </div>
        <div className={styles.locally__img}>
          <img className={styles.pattern__lines} src={pattern__lines} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Locally;
