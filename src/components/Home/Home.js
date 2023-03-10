import Enjoyable from '../Enjoyable/Enjoyable';
import Events from '../Events/Events';
import Footer from '../Footer/Footer';
import Hero from '../HeroHome/HeroHome';
import Highlights from '../Highlights/Highlights';
import Locally from '../Locally/Locally';
import styles from './Home.module.scss';

const Home = () => {
  return(
    <main>
      <Hero />
      <Enjoyable />
      <Locally />
      <Highlights />
      <Events />
      <Footer />
    </main>
  );
};

export default Home;
