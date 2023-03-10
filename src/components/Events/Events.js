import ButtonBook from '../ButtonBook/ButtonBook';
import styles from './Events.module.scss';

const Events = () => {
  return(
    <div>
      <button>Family Gathering</button>
      <button>Special Events</button>
      <button>Social Events</button>

      <h2>Family Gathering</h2>
      <p>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>

      <h2>Special Events</h2>
      <p>Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.</p>

      <h2>Social Events</h2>
      <p>Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.</p>
      
      <ButtonBook>Book a table</ButtonBook>
    </div>
  );
};

export default Events;
