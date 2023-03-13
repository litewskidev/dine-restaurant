import ButtonBook from '../ButtonBook/ButtonBook';
import './EventsSpecial.scss';
import pattern__lines from '../../images/patterns/pattern-lines.svg';

const EventsSpecial = (props) => {
  return(
    <div id='event-special' className='event__display'>
      <div className='events'>
        <div className='events__content'>
          <div className='events__content__img__special'>
            <img className='pattern__lines' src={pattern__lines} alt='' />
          </div>
          <div>
            <div className='events__description'>
              <div>
                <h2 className='text__L'>Special Events</h2>
                <p className='p__text'>Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.</p>
              </div>
            </div>
            <ButtonBook class='black'>Book a table</ButtonBook>
            <div className='events__buttons'>
              <button id='btn-family' onClick={props.click} className='nav'>Family Gathering</button>
              <button id='btn-special' onClick={props.click} className='nav'>Special Events</button>
              <button id='btn-social' onClick={props.click} className='nav'>Social Events</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSpecial;
