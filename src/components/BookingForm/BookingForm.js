import NumInput from '../../utils/NumInput/NumInput';
import styles from './BookingForm.module.scss';

const BookingForm = () => {
  return(
    <div className={styles.bookingform}>
      <form>
        <div className={styles.bookingform__text}>
          <input type='text' placeholder='Name' />
          <input type='email' placeholder='Email'/>
        </div>
        <div className={styles.bookingform__numbers}>
          <p>Pick a date</p>
          <input type="number" placeholder='MM' />
          <input type="number" placeholder='DD' />
          <input type="number" placeholder='YYYY' />
          <p>Pick a time</p>
          <input type="number" placeholder='09' />
          <input type="number" placeholder='00' />
          <select>
            <option>AM</option>
            <option>PM</option>
          </select>
        </div>
      </form>
      <NumInput />
      <button className={styles.black}>Make Reservation</button>
    </div>
  );
};

export default BookingForm;
