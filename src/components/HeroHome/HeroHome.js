import ButtonBook from '../ButtonBook/ButtonBook';
import styles from './HeroHome.module.scss';

const HeroHome = () => {
  return(
    <header className={styles.header}>
      <div className={styles.header__title}>
        <h2>dine</h2>
      </div>
      <div className={styles.header__description}>
        <h1>Exquisite dining<br/>since 1989</h1>
        <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
      </div>
      <ButtonBook>Book a table</ButtonBook>
    </header>
  );
};

export default HeroHome;
