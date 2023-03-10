import ButtonBook from '../ButtonBook/ButtonBook';
import styles from './HeroHome.module.scss';

const HeroHome = () => {
  return(
    <header>
      <h2>dine</h2>
      <h1>Exquisite dining since 1989</h1>
      <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
      <ButtonBook>Book a table</ButtonBook>
    </header>
  );
};

export default HeroHome;
