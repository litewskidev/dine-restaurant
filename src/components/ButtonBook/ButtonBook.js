import { Link } from 'react-router-dom';
import styles from './ButtonBook.module.scss';

const ButtonBook = props => {
  return(
    <Link to='/booking'>
      <button className={styles.btn}>{props.children}</button>
    </Link>
  );
};

export default ButtonBook;
