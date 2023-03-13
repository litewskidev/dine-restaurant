import ButtonBook from '../ButtonBook/ButtonBook';
import './EventsSocial.scss';
import pattern__lines from '../../images/patterns/pattern-lines.svg';

const EventsSocial = (props) => {
  return(
    <div id='event-social' className='event__display'>
      <div className='events'>
        <div className='events__content'>
          <div className='events__content__img__social'>
            <img className='pattern__lines' src={pattern__lines} alt='' />
          </div>
          <div>
            <div className='events__description'>
              <div>
                <h2 className='text__L'>Social Events</h2>
                <p className='p__text'>Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.</p>
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

export default EventsSocial;
