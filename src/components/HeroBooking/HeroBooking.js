import { Link } from 'react-router-dom';
import styles from './HeroBooking.module.scss';

const HeroBooking = () => {
  return(
    <div className={styles.herobooking}>
      <div className={styles.herobooking__logo}>
        <Link className={styles.link} to='/'>
            <h2 className={styles.herobooking__title}>dine</h2>
        </Link>
      </div>
      <div className={styles.herobooking__description}>
        <h1 className='text__L'>Reservations</h1>
        <p className='p__text'>We can’t wait to host you.
        If you have any special requirements please feel free
        to call on the phone number below. We’ll be happy to accommodate you.</p>
      </div>
    </div>
  );
};

export default HeroBooking;
