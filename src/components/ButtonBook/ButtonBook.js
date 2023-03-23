import { Link } from 'react-router-dom';
import './ButtonBook.scss';

const ButtonBook = props => {
  return(
    <Link className='link' to='/booking'>
      <p className={`btn ${props.class}`}>{props.children}</p>
    </Link>
  );
};

export default ButtonBook;
