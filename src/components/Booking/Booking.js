import Address from "../Address/Address";
import BookingForm from "../BookingForm/BookingForm";
import HeroBooking from "../HeroBooking/HeroBooking";
import styles from './Booking.module.scss';
import pattern__lines from '../../images/patterns/pattern-lines.svg';

const Booking = () => {
  document.documentElement.scrollTop = 0;
  return(
    <main>
      <div className={styles.booking}>
        <HeroBooking />
      </div>
      <div className={styles.booking__img}>
        <img className={styles.pattern__lines} src={pattern__lines} alt='' />
        <BookingForm />
      </div>
      <Address />
    </main>
  );
};

export default Booking;
