import ButtonBook from '../ButtonBook/ButtonBook';
import './EventsFamily.scss';
import pattern__lines from '../../images/patterns/pattern-lines.svg';

const EventsFamily = (props) => {
  return(
    <div id='event-family'>
      <div className='events'>
        <div className='events__content'>
          <div className='events__content__img__family'>
            <img className='pattern__lines' src={pattern__lines} alt='' />
          </div>
          <div>
            <div className='events__description'>
              <div>
                <h2 className='text__L'>Family Gathering</h2>
                <p className='p__text'>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
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

export default EventsFamily;
