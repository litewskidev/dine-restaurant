import ButtonBook from '../ButtonBook/ButtonBook';
import './EventsSocial.scss';
import pattern__lines from '../../images/patterns/pattern-lines.svg';

const EventsSocial = (props) => {
  return(
    <div id='event-social' className='event__display'>
      <div className='events__social'>
        <div className='events__content__social'>
          <div className='events__content__img__social'>
            <img className='pattern__lines__social' src={pattern__lines} alt='' />
          </div>
          <div>
            <div className='events__description__social'>
              <div>
                <h2 className='text__L'>Social Events</h2>
                <p className='p__text'>Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.</p>
              </div>
            </div>
            <ButtonBook class='black'>Book a table</ButtonBook>
            <div className='events__buttons__social'>
              <button id='btn-family-soc' onClick={props.click} className='nav__social'>Family Gathering</button>
              <button id='btn-special-soc' onClick={props.click} className='nav__social'>Special Events</button>
              <div className='button__line'>
                <img src={pattern__lines} alt='' />
                <button id='btn-social-soc' onClick={props.click} className='nav__social__active'>Social Events</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSocial;
