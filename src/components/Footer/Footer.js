import Address from '../Address/Address';
import ButtonBook from '../ButtonBook/ButtonBook';
import styles from './Footer.module.scss';

const Footer = () => {
  return(
    <div>
      <h2>Ready to make a reservation?</h2>
      <ButtonBook>Book a table</ButtonBook>
      <Address />
    </div>
  );
};

export default Footer;
