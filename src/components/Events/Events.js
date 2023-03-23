import EventsFamily from '../EventsFamily/EventsFamily';
import EventsSocial from '../EventsSocial/EventsSocial';
import EventsSpecial from '../EventsSpecial/EventsSpecial';

const Events = () => {

  const handleClick = e => {
    e.preventDefault();
    const id = (e.target.id);
    const family = document.querySelector('#event-family');
    const special = document.querySelector('#event-special');
    const social = document.querySelector('#event-social');

    if(id === 'btn-family-fam'){
      family.className = '';
      special.className = 'event__display';
      social.className = 'event__display';
    } else if (id === 'btn-family-spec') {
      family.className = '';
      special.className = 'event__display';
      social.className = 'event__display';
    }  else if (id === 'btn-family-soc') {
      family.className = '';
      special.className = 'event__display';
      social.className = 'event__display';
    }

    if(id === 'btn-special-fam'){
      family.className = 'event__display';
      special.className = '';
      social.className = 'event__display';
    } else if (id === 'btn-special-spec') {
      family.className = 'event__display';
      special.className = '';
      social.className = 'event__display';
    } else if (id === 'btn-special-soc') {
      family.className = 'event__display';
      special.className = '';
      social.className = 'event__display';
    }

    if(id === 'btn-social-fam') {
      family.className = 'event__display';
      special.className = 'event__display';
      social.className = '';
    } else if (id === 'btn-social-spec') {
      family.className = 'event__display';
      special.className = 'event__display';
      social.className = '';
    } else if (id === 'btn-social-soc') {
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
