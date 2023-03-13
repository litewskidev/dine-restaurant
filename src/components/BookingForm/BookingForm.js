import NumInput from '../../utils/NumInput/NumInput';
import styles from './BookingForm.module.scss';

const BookingForm = () => {
  return(
    <div className={styles.bookingform}>
      <form>
        <div className={styles.bookingform__text}>
          <input type='text' placeholder='Name' required />
          <input type='email' placeholder='Email' required />
        </div>
        <div className={styles.bookingform__numbers}>
          <p>Pick a date</p>
          <input type="number" placeholder='MM' required />
          <input type="number" placeholder='DD' required />
          <input type="number" placeholder='YYYY' required />
          <p>Pick a time</p>
          <input type="number" placeholder='09' min={9} required />
          <input type="number" placeholder='00' min={0} required />
          <select>
            <option>AM</option>
            <option>PM</option>
          </select>
        </div>
        <NumInput />
        <input type='submit' value='Make Reservation' className={styles.black} />
      </form>

    </div>
  );
};

export default BookingForm;
