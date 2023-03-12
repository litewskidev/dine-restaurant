import styles from './Highlights.module.scss';
import pattern from '../../images/patterns/pattern-divide.svg';

const Highlights = () => {
  return(
    <div className={styles.highlights}>
      <div className={styles.highlights__content}>
        <div className={styles.highlights__description}>
          <img className={styles.pattern} src={pattern} alt='' />
          <div>
            <h2 className='text__L'>
              A few highlights from<br />
              our menu
            </h2>
            <p className='p__text'>
              We cater for all dietary requirements, but here’s a glimpse
              at some of our diner’s favorites. Our menu is revamped every season.
            </p>
          </div>
        </div>
        <div className={styles.highlights__list}>

          <div className={styles.highlights__list__el}>
            <div className={styles.highlights__list__images}>
              <div className={styles.highlights__list__img__1}></div>
              <div className={styles.highlights__list_line}></div>
            </div>
            <div className={styles.highlights__list__el__info}>
              <h4 className='head__text'>
                Seared Salmon Fillet
              </h4>
              <p className='p__list'>
                Our locally sourced salmon served with a refreshing buckwheat summer salad.
              </p>
            </div>
          </div>

          <div className={styles.icon}></div>

          <div className={styles.highlights__list__el}>
            <div className={styles.highlights__list__images}>
              <div className={styles.highlights__list__img__2}></div>
              <div className={styles.highlights__list_line}></div>
            </div>
            <div className={styles.highlights__list__el__info}>
              <h4 className='head__text'>
                Rosemary Filet Mignon
              </h4>
              <p className='p__list'>
                Our prime beef served to your taste with a delicious choice of seasonal sides.
              </p>
            </div>
          </div>

          <div className={styles.icon}></div>

          <div className={styles.highlights__list__el}>
            <div className={styles.highlights__list__images}>
              <div className={styles.highlights__list__img__3}></div>
              <div className={styles.highlights__list_line}></div>
            </div>
            <div className={styles.highlights__list__el__info}>
              <h4 className='head__text'>
                Summer Fruit Chocolate Mousse
              </h4>
              <p className='p__list'>
                Creamy mousse combined with summer fruits and dark chocolate shavings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
