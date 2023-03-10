import styles from './Address.module.scss';

const Address = () => {
  return(
    <div className={styles.address}>
      <div className={styles.address__content}>
        <h2>dine</h2>
        <div className={styles.address__contact}>
          <div>
            <p>Marthwaite, Sedbergh</p>
            <p>Cumbria</p>
            <p>+00 44 123 4567</p>
          </div>
          <div>
            <p>Open Times</p>
            <p>Mon - Fri: 09:00 AM - 10:00 PM</p>
            <p>Sat - Sun: 09:00 AM - 11:30 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
