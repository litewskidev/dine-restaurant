import ButtonBook from '../ButtonBook/ButtonBook';
import styles from './Events.module.scss';
import pattern__lines from '../../images/patterns/pattern-lines.svg';

const Events = () => {
  return(
    <div className={styles.events}>
      <div>

      </div>
      <div className={styles.events__content}>
        <div className={styles.events__content__img}>
          <img className={styles.pattern__lines} src={pattern__lines} alt='' />
        </div>
        <div>
          <div className={styles.events__description}>
            <div>
              <h2 className='text__L'>Family Gathering</h2>
              <p className='p__text'>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
            </div>
          </div>
          <ButtonBook class='black'>Book a table</ButtonBook>
          <div className={styles.events__buttons}>
            <button className={styles.nav}>Family Gathering</button>
            <button className={styles.nav}>Special Events</button>
            <button className={styles.nav}>Social Events</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
