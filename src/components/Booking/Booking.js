import Address from "../Address/Address";
import BookingForm from "../BookingForm/BookingForm";
import HeroBooking from "../HeroBooking/HeroBooking";
import styles from './Booking.module.scss';
import pattern__lines from '../../images/patterns/pattern-lines.svg';

const Booking = () => {
  return(
    <main>
      <div className={styles.booking}>
        <HeroBooking />
        <BookingForm />
      </div>
      <div className={styles.booking__img}>
        <img className={styles.pattern__lines} src={pattern__lines} alt='' />
      </div>
      <Address />
    </main>
  );
};

export default Booking;
