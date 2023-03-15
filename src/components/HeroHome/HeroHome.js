import ButtonBook from '../ButtonBook/ButtonBook';
import styles from './HeroHome.module.scss';

const HeroHome = () => {
  return(
    <header className={styles.header}>
      <div className={styles.header__title}>
        <h2>dine</h2>
      </div>
      <div className={styles.header__description}>
        <h1 className={styles.header__h1}>
          Exquisite dining<br/>since 1989
        </h1>
        <p className={styles.header__p}>
          Experience our seasonal menu in beautiful country
          surroundings. Eat the freshest produce from the comfort
          of our farmhouse.
        </p>
        <ButtonBook class='white'>Book a table</ButtonBook>
      </div>
    </header>
  );
};

export default HeroHome;
