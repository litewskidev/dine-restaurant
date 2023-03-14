import { useState } from 'react';
import NumInput from '../NumInput/NumInput';
import styles from './BookingForm.module.scss';

const BookingForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [meridiem, setMeridiem] = useState('AM');
  const [peopleNum, setPeopleNum] = useState(4);

  const minuteFormat = (minute < 10) ? minute + '0' : minute;

  const summary = {
    Name: name,
    Email: email,
    Date: month + '.' + day + '.' + year,
    Time: hour + ':' + minuteFormat + ' ' + meridiem,
    People: peopleNum
  };

  const increment = () => {
    if(peopleNum <= 9) {
    setPeopleNum(peopleNum + 1);
    }
  };

  const decrement = () => {
    if(peopleNum >= 2) {
    setPeopleNum(peopleNum - 1);
    }
  };

  const reservation = (e) => {
    e.preventDefault();
    console.log(summary);

    setName('');
    setEmail('');
    setMonth('');
    setDay('');
    setYear('');
    setHour('');
    setMinute('');
    setMeridiem('');
    setPeopleNum(4);
  };

  return(
    <div className={styles.bookingform}>
      <form onSubmit={reservation}>
        <div className={styles.bookingform__text}>
          <input
            onChange={e => setName(e.target.value)}
            id='name'
            type='text'
            placeholder='Name'
            value={name}
            required />
          <input
            onChange={e => setEmail(e.target.value)}
            id='email'
            type='email'
            placeholder='Email'
            value={email}
            required />
        </div>
        <div className={styles.bookingform__numbers}>
          <p>Pick a date</p>
          <input
            onChange={e => setMonth(e.target.value)}
            id='month'
            type="number"
            placeholder='MM'
            value={month}
            min={1}
            max={12}
            required />
          <input
            onChange={e => setDay(e.target.value)}
            id='day'
            type="number"
            placeholder='DD'
            value={day}
            min={1}
            max={31}
            required />
          <input
            onChange={e => setYear(e.target.value)}
            id='year'
            type="number"
            placeholder='YYYY'
            value={year}
            min={2023}
            required />
          <p>Pick a time</p>
          <input
            onChange={e => setHour(e.target.value)}
            id='hour'
            type="number"
            placeholder='09'
            value={hour}
            min={1}
            max={12}
            required />
          <input
            onChange={e => setMinute(e.target.value)}
            id='minute'
            type="number"
            placeholder='00'
            value={minute}
            min={0}
            max={59}
            required />
          <select
            onChange={e => setMeridiem(e.target.value)}
            id='meridiem'
            value={meridiem}>
              <option>AM</option>
              <option>PM</option>
          </select>
        </div>
        <NumInput increment={increment} decrement={decrement} people={peopleNum} />
        <input type='submit' value='Make Reservation' className={styles.black} />
      </form>
    </div>
  );
};

export default BookingForm;
