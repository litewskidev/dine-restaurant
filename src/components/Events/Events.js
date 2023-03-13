import EventsFamily from '../EventsFamily/EventsFamily';
import EventsSocial from '../EventsSocial/EventsSocial';
import EventsSpecial from '../EventsSpecial/EventsSpecial';

const Events = () => {

  const handleClick = e => {
    const id = (e.target.id);
    const family = document.querySelector('#event-family');
    const special = document.querySelector('#event-special');
    const social = document.querySelector('#event-social');

    if(id === 'btn-family'){
      family.className = '';
      special.className = 'event__display';
      social.className = 'event__display';
    }

    if(id === 'btn-special'){
      family.className = 'event__display';
      special.className = '';
      social.className = 'event__display';
    }

    if(id === 'btn-social') {
      family.className = 'event__display';
      special.className = 'event__display';
      social.className = '';
    }
  };

  return(
    <div>
      <EventsFamily click={handleClick} />
      <EventsSpecial click={handleClick} />
      <EventsSocial click={handleClick} />
    </div>
  );
};

export default Events;
