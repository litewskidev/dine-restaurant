import Enjoyable from '../Enjoyable/Enjoyable';
import Events from '../Events/Events';
import Footer from '../Footer/Footer';
import HeroHome from '../HeroHome/HeroHome';
import Highlights from '../Highlights/Highlights';
import Locally from '../Locally/Locally';

const Home = () => {
  return(
    <main>
      <HeroHome />
      <Enjoyable />
      <Locally />
      <Highlights />
      <Events />
      <Footer />
    </main>
  );
};

export default Home;
