import Address from '../Address/Address';
import ButtonBook from '../ButtonBook/ButtonBook';
import styles from './Footer.module.scss';

const Footer = () => {
  return(
    <div className={styles.footer}>
      <div className={styles.footer__content}>
          <h2 className='text__L'>Ready to make a reservation?</h2>
          <ButtonBook class='white'>Book a table</ButtonBook>
      </div>
        <Address />
    </div>
  );
};

export default Footer;
