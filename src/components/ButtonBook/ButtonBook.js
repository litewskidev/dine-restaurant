import { Link } from 'react-router-dom';
import './ButtonBook.scss';

const ButtonBook = props => {
  return(
    <Link to='/booking'>
      <button className={`btn ${props.class}`}>{props.children}</button>
    </Link>
  );
};

export default ButtonBook;
