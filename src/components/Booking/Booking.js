import Address from "../Address/Address";
import BookingForm from "../BookingForm/BookingForm";
import HeroBooking from "../HeroBooking/HeroBooking";
import styles from './Booking.module.scss';
import pattern__lines from '../../images/patterns/pattern-lines.svg';
import ButtonBook from '../ButtonBook/ButtonBook';

const Booking = () => {
  document.documentElement.scrollTop = 0;
  return(
    <section>
      <div className={styles.booking}>
        <HeroBooking />
        <div className={styles.button__mobile}>
          <p>reserve place</p>
        </div>
      </div>
      <div className={styles.booking__img}>
        <img className={styles.pattern__lines} src={pattern__lines} alt='' />
        <BookingForm />
      </div>
      <Address />
    </section>
  );
};

export default Booking;
