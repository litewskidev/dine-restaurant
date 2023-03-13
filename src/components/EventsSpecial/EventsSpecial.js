import ButtonBook from '../ButtonBook/ButtonBook';
import './EventsSpecial.scss';
import pattern__lines from '../../images/patterns/pattern-lines.svg';

const EventsSpecial = (props) => {
  return(
    <div id='event-special' className='event__display'>
      <div className='events__special'>
        <div className='events__content__special'>
          <div className='events__content__img__special'>
            <img className='pattern__lines__special' src={pattern__lines} alt='' />
          </div>
          <div>
            <div className='events__description__special'>
              <div>
                <h2 className='text__L'>Special Events</h2>
                <p className='p__text'>Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.</p>
              </div>
            </div>
            <ButtonBook class='black'>Book a table</ButtonBook>
            <div className='events__buttons__special'>
              <button id='btn-family' onClick={props.click} className='nav__special'>Family Gathering</button>
              <button id='btn-special' onClick={props.click} className='nav__special'>Special Events</button>
              <button id='btn-social' onClick={props.click} className='nav__special'>Social Events</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSpecial;
